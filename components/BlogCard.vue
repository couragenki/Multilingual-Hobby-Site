<template>
  <article v-if="$i18n.locale === post.language" class="blog-crad">
    <Link :path="setPath">
      {{ check() }}
      <div
        class="pic"
        :style="{ backgroundImage: 'url(' + post.image + ')' }"
      ></div>
      <div class="article-info">
        <h4>{{ post.title }}</h4>
        <time :datetime="post.date">{{ post.date }}</time
        ><br />
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
  methods: {
    check() {
      console.log(this.post)
    },
  },
}
</script>
<style lang="scss">
.blog-crad {
  margin: 0 10px;
  background: #e7e8ea;
  border-radius: 10px;
  margin-top: 4%;
  a {
    color: black;
    text-decoration: none;
    .pic {
      height: 241px;
      background-size: cover;
      background-position: 50%;
      border-radius: 10px 10px 0 0;
    }
    .article-info {
      padding: 20px;
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
          border-radius: 5px;
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
    width: 100%;
    margin: 0 0 20px 0;
  }
}
</style>
