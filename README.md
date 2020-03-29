<a href="https://trolit.github.io/EzGitDoc/"><img src="https://github.com/trolit/EzGitDoc/blob/master/images/banner.PNG" alt="banner, icon from FontAwesome" height="100%"></a>

![Website label](https://img.shields.io/website?down_message=offline&up_message=online&url=https%3A%2F%2Ftrolit.github.io%2FEzGitDoc%2F)
![License label](https://img.shields.io/github/license/trolit/EzGitdoc)
![Current version label](https://img.shields.io/badge/current%20version-1.3-red)

## Description

<p align="justify">
  :page_with_curl: <a href="https://trolit.github.io/EzGitDoc/">EzGitDoc</a> is a project which received <code>under work</code> status to create webpage where user can prepare <em>.md</em> document scheme "live" and then obtain result as generated code ready to paste into file, to encourage people with making interesting documentations rather than leaving repository only with directory structure and primarily to make something useful(I hope so). It was made as a page using HTML and JavaScript to independent potential users from necessity to install extra software(you only need to enter site generated by github pages from link on the top of the repository for e.g.). The one required element is.. using modern browser in order to make all JS code work flawlessly. The process of creating doc scheme can look to You kinda similiar to creating WordPress webpage(well, it looks to me like that :alien:). You can switch elements between themselves, delete them, generate new. More data about EzGitDoc itself you can find on website. Here I wanted to focus on listing used libraries, showing some screenshots. Each element that EzGitDoc allow to create is showed in Help section on page.
</p>

## Why EzGitDoc?
<p align="justify">
    :grey_question: You may want to question yourself <em>why would I use it when there is tons of other options where you can also edit data ad hoc and see the result(e.g. WYSIWYG)</em>? At first, I would admit it too. The more popular tool is the more times it is picked - natural behavior. Before you make your final decision, please consider the following statement: <em>least resistance</em>. EzGitDoc is fledgling solution but allows to create document very fast. You don't need to write by yourself to develop more complicated structure and you can also insert data later(fact: in v1 you are obliged to do it with e.g. table but still good option to me). If you want to make table, specify 3 elements: rows, cols, type and there it is. EzGitDoc glorifies more clicking rather than forcing user to spam keyboard(You only specify required information). You don't need to change table structure independently in order to get more columns or rows. You just create new table and it's ready. WYSIWYG tools are quite handy when You want to see instant effect. In comparement to EzGitDoc there is no need to use it. Element is generated through code, not user input. I've watched some projects and they are much more complex(it's authors surely worked on them much longer than six days). Yet I don't like the idea when there is put a lot of interaction elements on UI. This is overwhelming. The more functionalities the better? I would not say that in every case. Look: most of the interested who want to create their document will surely have minimal knowledge of HTML language. What's the point of adding option allowing you to make cursive tag then? For me it's only space taker. I can't speak by all but personally, it annoys me. Making so many options requires user to learn UI which costs time. In EzGitDoc there are put only these functionalities that I find crucial on creating document scheme. No more, no less. Also added some extras from my experience. If you value your time and fingers I would suggest trying it :)  
</p>

#### EzGitDoc pros:

:star2: **Fast:** Specify element required data and get instantly result on page. <br/><br/>
:star2: **Less writing more clicking:** Respect your fingers and try certain elements with more clicking than writing. <br/><br/>
:star2: **Validation:** Get easy to understand notifies if something goes wrong. <br/><br/>
:star2: **Minimalistic UI:** Don't waste time on learning UI, just use it. <br/><br/>
:star2: **Easy to understand:** Don't waste time on looking after examples, markdown language. Create element and see it instantly. It's that easy. <br/><br/>

## Predefined templates
<p align="justify">
    :file_folder: Whether you have experience on creating docs for special purpose(e.g. open software, game, library, solution) or not and want to share pattern then it's possible! <a href="https://github.com/trolit/EzGitDoc/tree/master/templates">Here</a> are stored predefined templates. Before you mention your template make sure to check <code>exampleTemplate</code> and use <code>emptyTemplate</code>. 
</p>

## Screenshots

### Example 1

| Scheme | Result |
| :--: | :--: | 
| <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex1_a.PNG" alt="" width="100%"> | <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex1_b.PNG" alt="" width="100%"> | 

Note: If you want to achieve table that takes all available width(like shown in the Examples section, on EzGitDoc page), images placed in the table must be scaled manually using both axis(assuming that they have the same resolution). By having same resolution images you have guarantees that all cells will be equal and there will be no stretches. 

### Example 2

| Scheme | Result |
| :--: | :--: | 
| <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex2_a.PNG" alt="" width="100%"> | <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex2_b.PNG" alt="" width="100%"> | 

### Example 3

| Modal | Scheme | Result |
| :--: | :--: | :--: |
| <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex3_a.PNG" alt="" height="70%"> | <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex3_b.PNG" alt="" height="100%"> | <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex3_c.PNG" alt="" height="100%"> | 

### Example 4

| Scheme | Result |
| :--: | :--: | 
| <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex4_a.PNG" alt="" width="100%"> | <img src="https://github.com/trolit/EzGitDoc/blob/master/images/readme/ex4_b.PNG" alt="" width="100%"> | 

### Note

<img src="https://github.com/trolit/EzGitDoc/blob/master/images/quick_start_5.gif" alt="" width="50%">

I also wanted to mention here, that you can switch element's position by clicking on it and dragging to desired position, holding <em>LMB(Left Mouse Button)</em> at the same time. Free the <em>LMB</em> to stop dragging and drop element in it's current position.

## Libraries

<p>
EzGitDoc uses:
</p>

- <a href="https://github.com/SortableJS/Sortable">SortableJS</a>
- <a href="https://fontawesome.com/">Font Awesome icons set</a>
- <a href="https://l-lin.github.io/font-awesome-animation/">Font Awesome Animation</a>
- <a href="https://getbootstrap.com/docs/4.2/getting-started/introduction/">Bootstrap and required dependencies</a>
- <a href="https://mdbootstrap.com/">MDBootstrap</a>
- <a href="https://github.com/eligrey/FileSaver.js/">FileSaverJS</a>
- <a href="https://formspree.io/">FormSpree</a>
- <a href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js">JQuery 3.4.1</a>

## License
<a href="https://github.com/trolit/EzGitDoc/blob/master/LICENSE">MIT License</a> - Paweł Idzikowski

<br/>
<br/>
<br/>

---
Icon responding for EzGitDoc logo belongs to Font Awesome and is available <a href="https://fontawesome.com/icons/earlybirds">over here</a>.

Loading image source: <a href="https://loading.io/spinner/">Loading.io</a>
