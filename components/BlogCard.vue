<template>
  <article v-if="$i18n.locale === post.language" class="blog-crad">
    <Link :path="setPath">
      <div class="image">
        <div
          class="pic"
          :style="{ backgroundImage: 'url(' + post.image + ')' }"
        ></div>
        <div class="shadow"></div>
      </div>
      <div class="article-info">
        <h4>{{ post.title }}</h4>
        <ul v-for="tag in post.tags" :key="tag" class="tags">
          <li class="tag">
            {{ tag }}
          </li>
        </ul>
      </div>
    </Link>
  </article>
</template>
<script>
import Link from '~/components/Link.vue'
export default {
  components: { Link },
  props: {
    post: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    setPath() {
      if (this.post.language === 'en') {
        return this.post.path.replace('/en', '')
      }
      if (this.post.language === 'cn') {
        return this.post.path.replace('/cn', '')
      }
      return this.post.path
    },
  },
}
</script>
<style lang="scss">
.blog-crad {
  margin: 0 20px;
  margin-top: 4%;
  a {
    color: black;
    text-decoration: none;
    .image {
      width: 100%;
      position: relative;
      .pic {
        width: 95%;
        height: 241px;
        background-size: cover;
        background-position: 50%;
      }
      .shadow {
        position: absolute;
        top: 5%;
        left: 5%;
        width: 100%;
        width: 95%;
        height: 241px;
        background: #ececec;
        z-index: -1;
      }
    }
    .article-info {
      padding: 20px 0;
      h4 {
        font-size: 1.2em;
        font-weight: 800;
      }
      time {
        font-size: 0.8em;
      }
      .tags {
        list-style: none;
        display: inline-block;
        .tag {
          background: lightgray;
          margin-right: 0.3em;
          margin-bottom: 0.3em;
          padding: 0.1em 0.3em;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .blog-crad {
    width: 300px;
  }
}
@media (max-width: 768px) {
  .blog-crad {
    width: 50%;
    margin: 0 0 20px 0;
  }
}
</style>
