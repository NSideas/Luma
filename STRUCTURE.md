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

The header should be the first element after the opening body tag.

Modules referenced here: [Header Top Menu](#), [Main Nav](#)

```html
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




## Footer

The footer should be the last element on the page, just before the script tags.

Modules referenced here: [Footer Contact Info](MODULES.md#footer-contact-info), [Main Nav](#), [Secondary Nav](#)

```html
<footer id="footer" class="bg-color--brown">

  <div class="contain--wide grid-container">

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
    <a id="btn-scroll-top" href="#" title="Scroll to top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>

</footer>
```
