
# Modules

Editable fields are referenced in the code samples inside of curly braces. Eg. **Field&nbsp;Name** = `{Field_Name}`. This is not an actual syntax, it is just a way to demonstrate the logic.


### Contents

* [Main Nav](#main-nav)
* [Header Top Menu](#header-top-menu)
* [Footer Contact Info](#footer-contact-info)
* [Secondary Nav](#secondary-nav)




## Main Nav

The Main Nav should display links to all the main pages of the site.

#### Fields
* **Main Nav Item** – *repeater*
  * **Page** – *post object*
  * **Sub Nav Item** – *repeater (optional)*
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

This is the part of the header that is above the main nav.

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










## Block Lists

Block Lists are styled lists with that contain block-level HTML elements within each `li`. They consist of the repeatable field, **Block List Item** which include various sub fields based on the type of list.


#### Fields
* **Block List Item** – *repeater*
  * **Image** – *image*
  * **Content** – *rich text*

```html
<ul class="block-list grid-container">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item grid-4">
    {Image}
    {Content}
  </li>
  <!-- /for each -->

</ul>
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
```




## Staff List

The Staff List is used to display all the team members on the [leadership page](#).

#### Fields
* **Staff Member** – *repeater*
  * **Name** – *plain text*
  * **Suffix** – *plain text (optional)*
  * **Title** – *plain text*
  * **Portrait** – *image*
  * **Bio** – *rich text*

```html
<div id="staff-list" class="grid-container">

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
<div class="upcoming-event-list">
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
    <!-- if {Images} : -->
    <div class="event-photos flex">
      <!-- for each {Image} : -->
      <figure>
        {Photo}
        <!-- if {Caption} : -->
        <figcaption>{Caption}</figcaption>
        <!-- /if -->
      </figure>
      <!-- /for each -->
    </div>
    <!-- /if -->
  </section>
</div>
```





## Past Event List

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
<div class="main-section pre-footer--default">
  <div class="contain">
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
</div>
```




### Simple Pre-Footer

The Basic Pre-Footer is the same as the Pre-Footer except it does not have a content area. It is included on all basic pages, just above the footer.

```html
<div class="main-section pre-footer--simple top-shadow">
  <div class="contain">
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
