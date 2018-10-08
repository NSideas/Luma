
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

The Main Nav should display links to all the main pages of the site.

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


### Ordered Block List Single column

#### Fields
* **Block List Item** – *repeater*
  * **Content** – *rich text*

```html
<ol class="block-list block-list--ordered single-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item">
    {Content}
  </li>
  <!-- /for each -->

</ol>
```


### Ordered Block List Two Column

#### Fields

* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Sub Header** – *plain text*
  * **Content** – *rich text*


```html
<ol class="block-list block-list--ordered two-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item flex">
    <div class="grid-item left-column">
      <h5>{Sub_Header}</h5>
      <h3>{Header}</h3>
    </div>
    <div class="grid-item right-column">
      {Content}
    </div>
  </li>
  <!-- /for each -->

</ol>
```


### Ordered Block List Three Column

#### Fields

* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Content** – *rich text*


```html
<ol class="block-list block-list--ordered three-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item grid-item">
    <h5>{Header}</h5>
    <div class="content-area">
      <p>{Content}</p>
    </div>
  </li>
  <!-- /for each -->

</ol>
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
