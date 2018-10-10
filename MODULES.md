
# Modules

Editable fields are referenced in the code samples inside of curly braces. Eg. **Field&nbsp;Name** = `{Field_Name}`. This is not an actual syntax, it is just a way to demonstrate the logic.


### Contents

* [Main Nav](#main-nav)
* [Header Top Menu](#header-top-menu)
* [Home Page Slider](#home-page-slider)
* [Content Area](#content-area)
* [Two Column Section](#two-column-section)
* [Block Lists](#block-lists)
* [Full Width Image](#full-width-image)
* [Responsive Image](#responsive-image)
* [Staff List](#staff-list)
* [Hero 70-30](#hero-70-30)
* [Upcoming Event](#upcoming-event)
* [Upcoming Events List](#upcoming-events-list)
* [Past Event](#past-event)
* [Past Events List](#past-events-list)
* [News Article Teaser](#news-article-teaser)
* [News Filters](#news-filters)
* [Form Overlay](#form-overlay)
* [Pre-Footer](#pre-footer)
* [Footer Contact Info](#footer-contact-info)
* [Secondary Nav](#secondary-nav)




## Main Nav

The Main Nav should display links to all the main pages of the site. This module is indluded in both the [Header](STRUCTURE.md#header) and the [Footer](STRUCTURE.md#footer).

#### Fields
* **Main Nav Item** – *repeater*
  * **Page** – *post object*
  * **Sub Nav Item** – *repeater*
    * **Page** – *post object*


```html
<ul class="main-nav-list">

  <!-- for each {Nav_Item} : -->
  <li class="main-nav-item">
    <a href="{Main_Nav_Item -> URL}">{Main_Nav_Item -> Title}</a>
    <!-- if {Sub_Nav_Item} -->
    <ul class="sub-nav">
      <!-- for each {Sub_Nav_Item} : -->
      <li class="sub-nav-item">
        <a href="{Sub_Nav_Item -> URL}">{Sub_Nav_Item -> Title}</a>
      </li>
      <!-- /for each -->
    </ul>
    <!-- /if -->
  </li>
  <!-- /for each -->

</ul>
```





## Header Top Menu

This is the part of the [Header](STRUCTURE.md#header) that is above the main nav.

#### Fields
* **Menu Item** – *repeater*
  * **Title** – *plain text*
  * **URL** – *plain text*

```html
<div class="header-top-container contain">
  <ul class="header-top-menu">
    <!-- for each {Menu_Item} : -->
    <li><a href="{Menu_Item -> URL}">{Menu_Item -> Title}</a></li>
    <!-- /for each -->
  </ul>
  <ul class="sm-link-list">
    <li><a class="sm-link--facebook" href="https://www.facebook.com/lumawealth/">Facebook</a></li>
    <li><a class="sm-link--twitter" href="https://twitter.com/LumaWealth/">Twitter</a></li>
    <li><a class="sm-link--linkedin" href="https://www.linkedin.com/company/luma-wealth-advisors/">LinkedIn</a></li>
  </ul>
</div>
<div id="toggle-top-menu" class="flex">
  <span class="fa fa-chevron-down"></span>
</div>
```





## Home Page Slider
The Home Page Slider is a module that consists of the repeatable item, **Slide**. The images in the slider should all be the same size, at least 1200px wide and have an aspect ratio of approximately 2:1.

#### Fields
* **Slides** – *repeater*
  * **Image** – *image*
  * **Text** – *plain text*
  * **Link Text** – *plain text*
  * **Link URL** – *plain text*
  * **Text Position** – *select*
    * Options: right, left


```html
<div id="home-page-slider" class="swiper-container">
  <div class="swiper-wrapper">

    <!-- for each {Slide} : -->
    <div class="hp-slide text-{Text_Position}">
      <div class="image-container">
        {Image}
      </div>
      <div class="text-container">
        <div class="slide-content--outer">
          <section class="slide-content--inner">
            <h2 class="slide-text">{Text}</h2>
            <a class="cta-link" href="{Link_URL}">{Link_Text}</a>
          </section>
        </div>
      </div>
    </div>
    <!-- /for each -->

  </div>
  <div class="swiper-pagination"></div>
</div>
```





## Content Area

The Content Area displays the contents of a rich text or [WYSISYG](https://en.wikipedia.org/wiki/WYSIWYG) editor.

#### Fields
* **Body** – *rich text*

```html
<div class="content-area contain">
  {Body}
</div>
```





## Two Column Section

Use this module if you need a two column layout.

#### Fields
* **Left Column** – *rich text*
* **Right Column** – *rich text*

```html
<div class="two-column-section contain">
  <div class="content-area grid-6">
    {Left_Column}
  </div>
  <div class="content-area grid-6">
    {Right_Column}
  </div>
</div>
```





## Block Lists

Block Lists are styled lists with that contain block-level HTML elements within each `li`. They consist of the repeatable field, **Block List Item** which include various sub fields based on the type of list.


#### Fields
* **Block List Item** – *repeater*
  * **Image** – *image*
  * **Content** – *rich text*

```html
<div class="contain">
  <ul class="block-list grid-container">

    <!-- for each {Block_List_Item} : -->
    <li class="block-list-item grid-4">
      {Image}
      {Content}
    </li>
    <!-- /for each -->

  </ul>
</div>
```


### Compact Block List

The Compact Block List consists of a single column of list items. Each item is color coded and contains an icon and a brief section of text.

#### Fields
* **Block List Item** – *repeater*
  * **Icon** – *image*
  * **Title** – *plain text*
  * **Content** – *rich text*
  * **Color** – *select*
    * Options: light-red, dark-red, purple, blue, green

```html
<div class="contain">
  <ul class="block-list--compact">

    <!-- for each {Block_List_Item} : -->
    <li class="block-list-item">
      <div class="inner-wrap flex">
        {Icon}
        <section>
          <h4 class="{Color}">{Title}</h4>
          {Content}
        </section>
      </div>
    </li>
    <!-- /for each -->

  </ul>
</div>
```


### Process Diagram

The Process Diagram is used to illustrate a multi-step process.

#### Fields
* **Process Item** – *repeater*
  * **Header** – *image*
  * **Content** – *plain text*

```html
<div class="contain">
  <ul class="process-diagram grid-container">

    <!-- for each {Process_Item} : -->
    <li class="process-item grid-4">
      <header>
        <h4>{Header}</h4>
      </header>
      <div class="content">
        <p>{Content}</p>
      </div>
    </li>
    <!-- /for each -->

  </ul>
</div>
```





## Full Width Image

This module contains an image that spans the full width of the browser. It is important that this module does not get nested within a `.main-section` or `.contain`.

#### Fields
* **Image** – *image*

```html
<div class="full-width-img">
  {Image}
</div>
```



## Responsive Image

In some cases, you may want to use a different version of an image at a specific screen width. For this scenario, the `picture` element is used.

#### Fields
* **Default Image** – *image*
* **Large Image** – *image*
* **Breakpoint** – *number*

```html
<picture class="attachment-img">
  <source srcset="{Large_Image -> URL}" media="(min-width: {Breakpoint}px)">
  <img src="{Default_Image -> URL}" alt="{Default_Image -> alt}">
</picture>
```



## Staff List

The Staff List is used to display all the team members on the [leadership page](#).

#### Fields
* **Staff Member** – *repeater*
  * **Name** – *plain text*
  * **Suffix** – *plain text*
  * **Title** – *plain text*
  * **Portrait** – *image*
  * **Bio** – *rich text*

```html
<div id="staff-list" class="contain">
  <div id="staff-list--inner" class="grid-container">

    <!-- for each {Staff_Member} : -->
    <div id="{Name}" class="team-member">
      <a class="team-member-link" href="#{Name}">
        <img class="team-member-photo" src="{Portrait -> URL}" alt="{Name}">
        <h4 class="team-member-name">{Name}{Suffix}</h4>
        <h5 class="team-member-title">{Title}</h5>
      </a>
      <div class="team-member-bio">
        {Bio}
        <div class="btn-close"></div>
      </div>
    </div>
    <!-- /for each -->

  </div>
</div>
```





## Hero 70-30

This module is used to display an image and a short text heading side-by-side.

#### Fields
* **Image** – *image*
* **Text** – *plain text*

```html
<div class="hero--70-30 contain">
  <div class="img-column">
    {Image}
  </div>
  <div class="text-column">
    <h2 class="section-title">{Text}</h2>
  </div>
</div>
```





## Upcoming Event

#### Fields
* **Title** – *plain text*
* **Date** – *plain text*
* **Time** – *plain text*
* **Image** – *image*
* **Description** – *rich text*
* **Registration Link** – *plain text*

```html
<div class="upcoming-event">
  <img class="grid-4" src="{Image -> URL}" alt="{Image -> alt}">
  <section class="grid-8">
    <h3 class="event-name">{Title}</h3>
    <h4 class="event-date-time">{Date} @ {Time}</h4>
    <div class="event-body">
      <p>{Description}</p>
    </div>
    <a class="register-link overlay-trigger" href="{Registration_Link}">Resgister</a>
  </section>
</div>
```



## Upcoming Events List

The Upcoming Event List shows the three nearest upcoming events.

```html
<div class="upcoming-event-list contain">
  <!-- for each {Upcoming_Event} : include {Upcoming_Event} -->
</div>
```





## Past Event

#### Fields
* **Title** – *plain text*
* **Date** – *plain text*
* **Description** – *rich text*
* **Images** – *repeater*
  * **Photo** – *image*
  * **Caption** – *plain text*

```html
<div class="past-event">
  <section class="contain">
    <h4 class="past-event-date">{Date}</h4>
    <h4 class="past-event-name">{Title}</h4>
    <div class="event-body">
      {Description}
    </div>
    <div class="event-photos flex">
      <!-- for each {Image} : -->
      <figure>
        {Photo}
        <figcaption>{Caption}</figcaption>
      </figure>
      <!-- /for each -->
    </div>
  </section>
</div>
```



## Past Events List

The Past Event List shows the four most recent past events. Due to complexity of this layout, it is important that there are always four items in this list.

```html
<div id="past-events" class="bg-color--brown">
  <div class="inner-wrap flex">
    <header>
      <section class="contain">
        <h2 class="section-title">Past events</h2>
      </section>
    </header>
    <!-- include {Past_Event(1)} -->
    <!-- include {Past_Event(2)} -->
    <!-- include {Past_Event(3)} -->
    <!-- include {Past_Event(4)} -->
  </div>
</div>
```





## News Article Teaser

News Article Teasers appear in the news feed and link to their full articles.

```html
<li class="news-item">
  <a class="featured-image" href="{News_Article -> URL}">
    {News_Article -> Featured_Image}
  </a>
  <section class="post-info">
    <h5 class="post-date">{News_Article -> Date}</h5>
    <h3 class="post-title">
      <a href="{News_Article -> URL}">{News_Article -> Title}</a>
    </h3>
    <p class="content-preview">
      {News_Article -> Intro}
      <a class="more-link" href="{News_Article -> URL}">More</a>
    </p>
  </section>
</li>
```





## News Filters

This module allows the user to filter posts by category and month. The options listed within each section should be dynamically populated as articles are posted to the site.

```html
<aside class="news-filters">

  <section class="news-filter--category">
    <h4>Category</h4>
    <ul class="filter-options">
      <!-- for each {Category} : -->
      <li><a href="{Category -> URL}">{Category -> Name}</a></li>
      <!-- /for each -->
    </ul>
  </section>

  <section class="news-filter--archive">
    <h4>Archives</h4>
    <ul class="filter-options">
      <!-- for each {Month} : -->
      <li><a href="{Month -> URL}">{Month -> Name}</a></li>
      <!-- / for each -->
    </ul>
  </section>

</aside>
```




## Form Overlay

The Form Overlay is a module that contains a form and is hidden by default. The overlay becomes visible when a user clicks on its trigger. For examples of forms, see the [forms page](http://dev.bigfatideas.com/Luma/site/forms.html) on the demo site.

#### Fields
**Form** – *module*

```html
<div id="{Form -> Name}" class="overlay-module">
  <div class="overlay-module--outer-wrap">
    <div class="overlay-module--inner-wrap">

      <div class="close-button-container">
        <div class="btn-close"></div>
      </div>

      {Form}

    </div>
  </div>
</div>
```



## Pre-Footer

The Pre-Footer is included on the homepage, just above the footer. It is used to display relevant information and links.

### Default Pre-Footer

#### Fields
* **Pre-Footer Item** – *repeater*
  * **Header** – *plain text*
  * **Link Title** – *plain text*
  * **Link Text** – *plain text*
  * **Content** – *rich text*

```html
<div class="pre-footer--default contain">
  <ul class="block-list grid-container">

    <!-- for each {Pre_Footer_Item} : -->
    <li class="block-list-item grid-4">
      <header>
        <h2>{Header}</h2>
        <a class="cta-link" href="{Link_URL}">{Link_Text}</a>
      </header>
      <div class="content">
        {Content}
      </div>
    </li>
    <!-- /for each -->

  </ul>
</div>
```



### Simple Pre-Footer

The Basic Pre-Footer is the same as the Pre-Footer except it does not have a content area. It is included on all basic pages, just above the footer.

```html
<div class="pre-footer--simple contain">
  <ul class="block-list grid-container">

    <!-- for each {Pre_Footer_Item} : -->
    <li class="block-list-item grid-4">
      <header>
        <h2>{Header}</h2>
        <a class="cta-link" href="{Link_URL}">{Link_Text}</a>
      </header>
    </li>
    <!-- /for each -->

  </ul>
</div>
```





## Footer Contact Info

#### Fields

* **Content** – *rich text*

```html
<div class="footer-contact-info">
  {Content}
</div>
```





## Secondary Nav

The Secondary Nav displays links to secondary pages in the [Footer](STRUCTURE.md#footer).

#### Fields

* **Nav_Item** – *repeater*
  * **Title** – *plain text*
  * **URL** – *plain text*

```html
<ul class="secondary-nav-list">
  <!-- for each {Nav_Item} : -->
  <li class="secondary-nav-item">
    <a href="{Nav_Item -> URL}">{Nav_Item -> Title}</a>
  </li>
  <!-- /for each -->
</ul>
```

---

[Back to Top](#modules)
