<template>
  <div class="text-display">
    <span class="text-display__text">{{ displayedText }}</span>
  </div>
</template>

<script type="ts">
// import { delayIterator } from '@/libs/utils';
import {
  interval, from, zip, Subject,
} from 'rxjs';
import { tap, switchMap, takeUntil } from 'rxjs/operators';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      typedText: '',
      textUpdated: new Subject(),
    };
  },
  computed: {
    displayedText() {
      return this.typedText;
    },
  },
  watch: {
    text(newText, oldText) {
      this.textUpdated.next();
      zip(interval(10), from(oldText))
        .pipe(
          takeUntil(this.textUpdated),
          tap(() => {
            this.typedText = this.typedText.slice(0, -1);
          }),
          switchMap(() => zip(interval(100), from(newText))),
          takeUntil(this.textUpdated),
          tap(([, text]) => { this.typedText += text; }),
        ).subscribe();
    },
  },
  mounted() {
    zip(interval(100), from(this.text))
      .pipe(
        takeUntil(this.textUpdated),
        tap(([, text]) => { this.typedText += text; }),
      ).subscribe();
  },
  methods: {
    // async updateText(newText, oldText) {

    // const deleteText = delayIterator(
    //   (_, i) => { this.typedText = oldText.slice(0, i); },
    //   false,
    //   10,
    //   oldText,
    // );
    // const typeText = delayIterator((s) => { this.typedText += s; }, true, 100, newText);
    // await deleteText();
    // await typeText();
    // },
  },
};
</script>

<style lang="scss" scoped>
.text-display {
  color: white;
  font-size: 36px;
  border-bottom: 1px solid white;
  width: 100%;
  padding: 10px;

  &__text {
    border-right-width: 1px;
    border-right-style: solid;
    animation: blink 0.5s step-end infinite alternate;
  }

  @keyframes blink {
    0% {
      border-right-color: black;
    }
    50% {
      border-right-color: #ffffff;
    }
  }
}
</style>
