<template>
  <div class="core__dashed-circle">
    <div
      v-for="i in Array(20)"
      :key="i"
      class="core__dashed-circle--dash test"
      :class="{ idle: !isWorking, working: isWorking }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    isWorking: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@use 'sass:math';
@import "@/scss/variables";

$max: 20;
$width: 10px;
$height: 7px;
$time: 2;

.core {
  &__dashed-circle {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 100px;

    &--dash {
      background: #ccffff;
      width: $width;
      height: $height;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -5px;
      // margin-top: -3px;
      transform-origin: top;
      box-shadow: 0px 0px 5px rgba(204, 255, 255, 0.2);
      opacity: 0.1;
      transition: active-opacity 0.2s linear;

      &.working {
        animation: active-opacity #{$time}s linear infinite;
      }

      &.idle {
        animation: idle-opacity #{$time}s linear infinite;
        animation-delay: 0s;
      }

      @for $item from 1 through $max {
        &.working:nth-child(#{$max}n + #{$item}) {
          animation-delay: -#{$time - ($time * math.div($item, $max))}s;
        }
        &:nth-child(#{$max}n + #{$item}) {
          transform: rotate(#{360 * math.div($item, $max)}deg)
            translate(0px, math.div($core-size, 4.5) + 0px)
            skew(-25deg)
            rotateZ(2deg);
        }
      }
    }
  }
}

@keyframes idle-opacity {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.25;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes active-opacity {
  0% {
    opacity: 1;
  }

  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.1;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
