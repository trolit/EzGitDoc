/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */

var isAutomatedModalEnabled;
var isAutoToastHideEnabled;
var isHintKeyEnabled;
var isNonSpacedElementsEnabled;
var isDeleteConfirmationEnabled;

var automatedModalsKey = 'automated-modals';
var automatedErrorsHidingKey = 'automated-hiding';
var hintsKey = 'keys-hints';
var nonSpacedElementsKey = 'nonSpacedElements';
var deleteConfirmationKey = 'delete-confirmation';

function updateSetting(name) {
  if (name === 'autoModals') {
    isAutomatedModalEnabled = document.getElementById('autoMod_switch').checked;
    changeStatusLabel(isAutomatedModalEnabled, 'autoMod_switch_label');
    saveToLocalStorage(automatedModalsKey, isAutomatedModalEnabled);
  } else if (name === 'autoDisappear') {
    isAutoToastHideEnabled = document.getElementById('autoDisappear_switch').checked;
    changeStatusLabel(isAutoToastHideEnabled, 'autoDisappear_switch_label');
    saveToLocalStorage(automatedErrorsHidingKey, isAutoToastHideEnabled);
  } else if (name === 'hintKeys') {
    isHintKeyEnabled = document.getElementById('hintKeys_switch').checked;
    changeStatusLabel(isHintKeyEnabled, 'hintKeys_switch_label');
    if (isHintKeyEnabled) {
      manageKeyHints('show');
    } else {
      manageKeyHints('hide');
    }
    saveToLocalStorage(hintsKey, isHintKeyEnabled);
  } else if (name === 'nonSpacedElements') {
    isNonSpacedElementsEnabled = document.getElementById('nonSpacedElements_switch').checked;
    changeStatusLabel(isNonSpacedElementsEnabled, 'nonSpacedElements_switch_label');
    var elements = document.getElementsByClassName('ezGitPart');
    if (elements.length !== 0) {
      elements.forEach(element => {
        if (element.children[0].tagName === 'IMG') {
          setStyleForElement(element, `text-align: ${element.style.textAlign};`);
        } else {
          setStyleForElement(element);
        }
      });
    }
    saveToLocalStorage(nonSpacedElementsKey, isNonSpacedElementsEnabled);
  } else if (name === 'deleteConfirmation') {
    isDeleteConfirmationEnabled = document.getElementById('deleteConfirmation_switch').checked;
    changeStatusLabel(isDeleteConfirmationEnabled, 'deleteConfirmation_switch_label');
    saveToLocalStorage(deleteConfirmationKey, isDeleteConfirmationEnabled);
  }
}

function changeStatusLabel(checkStatus, labelId) {
  var tmp = document.getElementById(labelId);
  if (checkStatus === true) {
    tmp.classList.remove('badge-danger');
    tmp.classList.add('badge-success');
    tmp.textContent = 'enabled';
  } else {
    tmp.classList.remove('badge-success');
    tmp.classList.add('badge-danger');
    tmp.textContent = 'disabled';
  }
}

function loadSetting(key, switchId, labelId) {
  isEnabled = JSON.parse(getValueFromLocalStorage(key));
  isEnabled = isEnabled === null ? false : isEnabled;
  document.getElementById(switchId).checked = isEnabled;
  changeStatusLabel(isEnabled, labelId);
  return isEnabled;
}

function loadSettings() {
  isAutomatedModalEnabled = loadSetting(automatedModalsKey, 'autoMod_switch', 'autoMod_switch_label');
  isAutoToastHideEnabled = loadSetting(automatedErrorsHidingKey, 'autoDisappear_switch', 'autoDisappear_switch_label');
  isNonSpacedElementsEnabled = loadSetting(nonSpacedElementsKey, 'nonSpacedElements_switch', 'nonSpacedElements_switch_label');
  isDeleteConfirmationEnabled = loadSetting(deleteConfirmationKey, 'deleteConfirmation_switch', 'deleteConfirmation_switch_label');
  isHintKeyEnabled = loadSetting(hintsKey, 'hintKeys_switch', 'hintKeys_switch_label');
  if (isHintKeyEnabled) {
    manageKeyHints('show');
  } else {
    manageKeyHints('hide');
  }
}

function manageKeyHints(flag) {
  var badges = document.getElementsByClassName('hintKey');
  for (var i = 0; i < badges.length; i++) {
    if (flag === 'show') {
      badges[i].classList.remove('hide');
    } else if (flag === 'hide') {
      badges[i].classList.add('hide');
    }
  }
}

// Themes management

var themeBadge = document.getElementById('themeBadge');

function loadTheme() {
  var theme = getValueFromLocalStorage('data-theme');
  theme = theme === null ? 'theme-classic' : theme;
  var html = document.documentElement;
  html.setAttribute('data-theme', theme);
  setThemeBadge(theme);
}

function setThemeBadge(name) {
  themeBadge.textContent = name;
}

function setTheme(name) {
  if (activeTheme != null) {
    activeTheme.style.border = '1px solid black';
  }
  saveToLocalStorage('data-theme', name);
  var html = document.documentElement;
  html.setAttribute('data-theme', name);
  setThemeBadge(name);
  var elements = document.getElementsByClassName('ezGitPart');
  if (elements.length > 0) {
    cleanEzGitPartsBackground(elements);
  }
  highlightActiveTheme();
}

var activeTheme;

function highlightActiveTheme() {
  var html = document.documentElement;
  var dataTheme = html.getAttribute('data-theme');
  var themeBoxes = document.getElementsByClassName('theme-box');
  themeBoxes.forEach(themeBox => {
    if (themeBox.classList.contains(`theme-${dataTheme}`)) {
      themeBox.style.border = '3px solid #4AEFC6';
      activeTheme = themeBox;
    }
  });
}

$('#themesModal').on('shown.bs.modal', function() {
  highlightActiveTheme();
});

$('#themesModal').on('hidden.bs.modal', function() {
  activeTheme.style.border = '1px solid black';
});

function cleanEzGitPartsBackground(elements) {
  elements.forEach(element => {
    element.style.removeProperty('background-color');
  });
}

// Local Storage Helpers

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function getValueFromLocalStorage(key) {
  return localStorage.getItem(key);
}
