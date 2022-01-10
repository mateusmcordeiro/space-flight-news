<template>
  <card
    :class="{
      [$style['card-news']]: true,
      [$style['card-news__no-height-limit']]: removeTextLimit,
    }"
    :fullWidth="removeTextLimit"
    transparent
  >
    <template v-slot:image>
      <img :src="imageUrl" />
    </template>
    <template v-slot:content>
      <header :class="$style['card-news__header']">
        <h3>{{ title }}</h3>
        <div :class="$style['card-news__status']">
          <p :class="$style['card-news__release-date']">{{ date }}</p>
          <div :class="$style['card-news__badges']">
            <badge v-for="badge in badges" :key="badge.id">{{
              badge.text
            }}</badge>
          </div>
        </div>
      </header>
      <article :class="$style['card-news__resume']">
        <p>
          {{ summary }}
        </p>
        <s-f-button
          v-if="!removeDetailButton"
          @click="$emit('openNews', $event)"
        >
          Ver mais
        </s-f-button>
      </article>
    </template>
  </card>
</template>
<script>
import Card from '@/shared/components/atoms/Card';
import SFButton from '@/shared/components/atoms/SFButton';
import backgroundCard from '@/assets/images/card.jpg';
import Badge from '@/shared/components/atoms/Badge';
export default {
  props: {
    removeDetailButton: {
      type: Boolean,
      default: false,
    },
    removeTextLimit: Boolean,
    title: String,
    date: String,
    imageUrl: String,
    badges: Array,
    summary: String,
  },
  components: {
    Card,
    SFButton,
    Badge,
  },
  setup() {
    return { backgroundCard };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_colors';
@import '~@/design/_fonts';
@import '~@/design/_sizes';
@import '~@/design/_typography';
.card-news {
  $self: &;
  &__header {
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
      @extend %typography-medium-heading;
      line-height: 19px;
      color: var(--primary);
    }
    #{$self}__status {
      display: flex;
      margin: 6px 0;
      #{$self}__release-date {
        @extend %typography-small-x;
        margin: 0;
        color: white;
      }
      #{$self}__badges {
        display: flex;
        gap: 4px;
        margin-left: auto;
        max-width: 248px;
        overflow-x: auto;
        width: 100%;
        justify-content: flex-end;
      }
    }
  }
  &__resume {
    p {
      margin: 0 0 17px 0;
      @extend %typography-small;
      color: white;
      max-height: 99px;
      overflow: hidden;
    }
  }
  &__no-height-limit {
    #{$self}__resume {
      p {
        overflow: auto;
        max-height: 100%;
      }
    }
  }
}
</style>
