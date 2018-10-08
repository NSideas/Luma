
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

### Unordered Block List

#### Fields
* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Content** – *rich text*

```html
<ul class="block-list block-list--unordered two-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item flex">
    <div class="grid-item left-column">
      <h3>{Header}</h3>
    </div>
    <div class="grid-item right-column">
      {Content}
    </div>
  </li>
  <!-- /for each -->

</ul>
```




## Pre-Footer

The Pre-Footer is included on the homepage, just above the footer. It is used to display relevant information and links.

#### Fields
* **Pre-Footer Item** – *repeater*
  * **Header** – *plain text*
  * **Link Title** – *plain text*
  * **Link Text** – *plain text*
  * **Content** – *rich text*

```html
<div class="main-section pre-footer">
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




### Basic Pre-Footer

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
