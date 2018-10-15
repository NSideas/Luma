# Structure

The page title should start with the name of the current page followed by " – Luma Wealth Advisors".

Eg. "Wealth Planning – Luma Wealth Advisors".

The body must have the following class name to identify the page, template and primary color:

  * `page-{Page -> Slug}`

For example, the body tag on "Wealth Planning" should look like this:

```html
<body class="page-wealth-planning">
...
```


## Header

The Header should be the first element after the opening body tag.

Modules referenced here: [Header Top Menu](MODULES.md#header-top-menu), [Main Nav](MODULES.md#main-nav)

```html
<!--[if lte IE 9]>
<div class="browserupgrade">
  <p>You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
</div>
<![endif]-->

<header id="header">

  <!-- include {Header_Top_Menu} -->

  <div class="header-container relative">

    <div class="logo-wrap">
      <a class="logo" href="{Home_Page_URL}">
        <img src="../dist/img/luma-logo.png" alt="Luma Wealth">
      </a>
    </div>

    <div id="menu-toggle">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <nav id="header-nav">
      <!-- include {Main_Nav} -->
    </nav>

  </div>

</header>
```




## Main Sections

The Main Sections are essentially the building blocks of each page. Most modules should be nested within a Main Section.

```html
<div id="{Module -> Name}" class="main-section">
  <!-- include {Module} -->
</div>
```

Main Sections can have background colors and inner shadows. To apply a background color, append the following class name to the Main Section: `bg-color--{Color}`, where **Color** can be either **beige** or **brown**.

```html
<div id="{Module -> Name}" class="main-section bg-color--beige">
  <!-- include {Module} -->
</div>
```

To add an inner shadow, use one the following class names: `top-shadow`, `bottom-shadow` or `inner-shadow`. The `inner-shadow` class is essentially shorthand for combining `top-shadow` with `bottom-shadow`.

```html
<div id="{Module -> Name}" class="main-section bg-color--beige top-shadow">
  <!-- include {Module} -->
</div>
```

If multiple modules are contained within a Main Section, they should each be wrapped in a **Sub Section**.

```html
<div class="main-section">
  <div id="{Module -> Name}" class="sub-section">
    {Module}
  </div>
  <div id="{Module -> Name}" class="sub-section">
    {Module}
  </div>
</div>
```





## Footer

The Footer should be the last element on the page, just before the script tags.

Modules referenced here: [Footer Contact Info](MODULES.md#footer-contact-info), [Main Nav](MODULES.md#main-nav), [Secondary Nav](MODULES.md#secondary-nav)

```html
<footer id="footer" class="bg-color--brown">

  <div class="contain grid-container">

    <div class="grid-4">
      <a class="logo" href="{Home_Page_URL}">
        <img src="../dist/img/luma-logo-white.png" alt="Luma Wealth">
      </a>
      <!-- include {Footer_Contact_Info} -->
    </div>

    <nav id="footer-nav" class="grid-8 grid-container">
      <!-- include {Main_Nav} -->
      <!-- include {Secondary_Nav} -->
    </nav>

  </div>

  <div id="scroll-top-container">
    <a id="btn-scroll-top" href="#" title="Scroll to top"></a>
  </div>

</footer>
```
