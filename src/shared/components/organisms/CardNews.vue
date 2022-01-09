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
      <img :src="backgroundCard" />
    </template>
    <template v-slot:content>
      <header :class="$style['card-news__header']">
        <h3>Tenete ergo quod si servitus</h3>
        <div :class="$style['card-news__status']">
          <p :class="$style['card-news__release-date']">11/10/1997</p>
          <div :class="$style['card-news__badges']">
            <badge>newsSite</badge>
            <badge>newsSite</badge>
            <badge>newsSite</badge>
          </div>
        </div>
      </header>
      <article :class="$style['card-news__resume']">
        <p>
          Opus igitur est dicere possit dura omni specie, "Tu autem in specie,
          non videntur, nec omnino rest est." Et examine ab eis praecepta eius
          quae Opus igitur est dicere possit dura omni specie, "Tu autem in
          specie, non videntur, nec omnino rest est." Et examine ab eis
          praecepta eius quae Opus igitur est dicere possit dura omni specie,
          "Tu autem in specie, non videntur, nec omnino rest est." Et examine ab
          eis praecepta eius quae Opus igitur est dicere possit dura omni
          specie, "Tu autem in specie, non videntur, nec omnino rest est." Et
          examine ab eis praecepta eius quae Opus igitur est dicere possit dura
          omni specie, "Tu autem in specie, non videntur, nec omnino rest est."
          Et examine ab eis praecepta eius quae Opus igitur est dicere possit
          dura omni specie, "Tu autem in specie, non videntur, nec omnino rest
          est." Et examine ab eis praecepta eius quae Opus igitur est dicere
          possit dura omni specie, "Tu autem in specie, non videntur, nec omnino
          rest est." Et examine ab eis praecepta eius quae Opus igitur est
          dicere possit dura omni specie, "Tu autem in specie, non videntur, nec
          omnino rest est." Et examine ab eis praecepta eius quae Opus igitur
          est dicere possit dura omni specie, "Tu autem in specie, non videntur,
          nec omnino rest est." Et examine ab eis praecepta eius quae Opus
          igitur est dicere possit dura omni specie, "Tu autem in specie, non
          videntur, nec omnino rest est." Et examine ab eis praecepta eius quae
          Opus igitur est dicere possit dura omni specie, "Tu autem in specie,
          non videntur, nec omnino rest est." Et examine ab eis praecepta eius
          quae Opus igitur est dicere possit dura omni specie, "Tu autem in
          specie, non videntur, nec omnino rest est." Et examine ab eis
          praecepta eius quae
        </p>

        <s-f-button @click="$emit('openNews', $event)">Ver mais</s-f-button>
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
    removeTextLimit: Boolean,
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
@import '~@/design';
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
