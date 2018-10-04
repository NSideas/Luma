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

Modules referenced here: [Header Top Menu](#), [Footer Contact Info](#)

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

Modules referenced here: [Social Media Link List](MODULES.md#social-media-link-list), [Footer Contact Info](MODULES.md#footer-contact-info), [Newsletter Signup](MODULES.md#newsletter-signup)

```html
<footer id="footer">
  <div class="container">

    <div class="footer-section--top footer-section flex">
      <a class="footer-home-link" href="/">
        <img src="../dist/img/fairport-logo-white.svg" alt="Fairport Asset Management">
      </a>
      <!-- include {Social_Media_Link_List} -->
    </div>

    <div class="footer-section flex grid-container two-column">
      <!-- include {Footer_Contact_Info} -->
      <!-- include {Newsletter_Signup} -->
    </div>

    <nav id="footer-nav" class="footer-section">
      <ul class="footer-nav-list flex grid-container two-column--medium four-column--large">

        <!-- for each {Nav_Item} : -->
        <li class="footer-nav-item">
          <a href="{Main_Nav_Item -> URL}">{Main_Nav_Item -> Title}</a>
          <ul class="footer-sub-nav">
            <!-- for each {Sub_Nav_Item} : -->
            <li><a href="{Sub_Nav_Item -> URL}">{Sub_Nav_Item -> Title}</a></li>
            <!-- /for each -->
          </ul>
        </li>
        <!-- /for each -->

      </ul>
    </nav>

    <div class="footer-section">
      <p>© Fairport LLC. All rights reserved.</p>
    </div>

  </div>
</footer>
```
