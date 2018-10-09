# Templates

These templates represent the different types of pages throughout the site.


## Default Template

This template is used for all basic pages.

#### Fields
* **Title** – *plain text*
* **Modules** – *page sections*


```html
<!-- include {Header} -->

<main class="main-content">
  <!-- for each {Module} : include {Module} -->
</main>

<!-- include {Footer} -->
```





## News Feed Template

This template is used for the *Informing Views* page.

#### Fields
* **Title** – *plain text*
* **CTA Link URL** – *plain text*
* **CTA Link Text** – *plain text*


Modules referenced here: [News Article Teaser](MODULES.md#news-article-teaser), [News Filters](MODULES.md#news-filters)


```html
<!-- include {Header} -->

<main class="main-content">

  <div class="main-section">
    <div class="intro-section contain">
      <h2 class="section-title">{Title}</h2>
      <a class="cta-link" href="{CTA_Link_URL}">{CTA_Link_Text}</a>
    </div>
  </div>

  <div id="news" class="main-section">
    <div class="news-section grid-container contain">

      <div class="news-container">

        <ul class="news-list">
          <!-- for each {News_Article} : include {News_Article_Teaser} -->
        </ul>

        <div class="news-pagination">
          <!-- if (not last page) : -->
          <span class="pagination-next">
            <a class="next-page" href="{Next_Page_URL}" rel="next">Next</a>
          </span>
          <!-- /if -->
          <!-- if (not first page) : -->
          <span class="pagination-prev">
            <a class="prev-page" href="{Prev_Page_URL}" rel="prev">Previous</a>
          </span>
          <!-- /if -->
        </div>

      </div>

      <!-- include {News_Filters} -->

    </div>
  </div>

</main>

<!-- include {Footer} -->
```





## News Article Template

This template is used for all News Articles. The **Intro** field is not referenced in this template—it is used for the [News Article Teaser](MODULES.md#news-article-teaser).

#### Fields
* **Title** – *plain text*
* **Date** – *plain text*
* **Category** – *plain text*
* **Featured Image** – *image*
* **Show Featured Image in Post** – *true/false*
* **Intro** – *plain text*
* **Body** – *rich text*


```html
<!-- include {Header} -->

<main class="main-content">

  <div class="main-section">
    <div class="intro-section contain">
      <h2 class="section-title">{Informing_Views -> Title}</h2>
      <a class="cta-link" href="{Informing_Views -> CTA_Link_URL}">{Informing_Views -> CTA_Link_Text}</a>
    </div>
  </div>

  <div id="news" class="main-section">
    <div class="news-section grid-container contain">

      <div class="news-container">

        <article class="single-post">
          <header>
            <h5 class="post-date">{Date}</h5>
            <h3 class="post-title">{Title}</h3>
          </header>
          <!-- if {Show_Featured_Image_in_Post} : -->
          <div class="featured-image">
            {Featured_Image}
          </div>
          <!-- /if -->
          <div class="post-content">
            {Body}
          </div>
        </article>

        <div class="news-pagination">
          <!-- if (not last page) : -->
          <span class="pagination-next">
            <a class="next-page" href="{Next_Post_URL}" rel="next">Next</a>
          </span>
          <!-- /if -->
          <!-- if (not first page) : -->
          <span class="pagination-prev">
            <a class="prev-page" href="{Prev_Post_URL}" rel="prev">Previous</a>
          </span>
          <!-- /if -->
        </div>

      </div>

      <!-- include {News_Filters} -->

    </div>
  </div>

</main>

<!-- include {Footer} -->
```




---
---
---
