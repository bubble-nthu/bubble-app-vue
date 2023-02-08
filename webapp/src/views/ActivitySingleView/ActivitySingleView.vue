<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <section class="activity-single-view">
    <div class="activity-single-view__content">
      <img class="activity-single-view__banner"
        src="https://drive.google.com/uc?export=view&id=1pFfY2aGmcLP3oG_9wKVzsTBsBndUB7mJ"
      />
      <div class="activity-single-view__title">2023 第一場永續沙龍！生活實驗室計畫說明會！</div>
      <div class="activity-single-view__basic-info">
        <div class="activity-single-view__orgs">
          <img src = "@/assets/Orgs/greendot-logo.png" alt="GreenDot Log" class="activity-single-view__logo" />
          <div style="white-space: pre">清華綠點點</div>
        </div>
        <div class="activity-single-view__location-and-date-wrap">
          <div class="activity-single-view__card-bk-info-wrap">
            <span class="activity-single-view__card-bk-info" style="margin-left: auto;">
            2023-02-28
            </span>
            <span class="activity-single-view__card-bk-info">
              <span class="material-symbols-outlined">
                location_on
              </span>
              <span>教育館 Rm 103</span>
            </span>
          </div>
        </div>
      </div>
      <hr class="activity-single-view__card-line"/>
      <div class="activity-single-view__card-event-wrap">
        <img src = "/src/assets/SDGs/12.png" alt="Bubble Log" height="48" width="48" />
        <div class="activity-single-view__card-status-wrap">
          <span class="activity-single-view__card-watch">
            <span class="material-symbols-outlined" style="">
              visibility
            </span>
            <span>110</span>
          </span>
          <span class="activity-single-view__card-join">
            <span class="material-symbols-outlined card-icon">
            person
            </span>
            <span>15</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.activity-single-view__basic-info {
  display: flex;
  align-items: center;
}
.activity-single-view__banner{
  height: 240px;
  width: 100%;
  display: block;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  margin-bottom: 1rem;
}

.activity-single-view__content {
  box-shadow: 0 2px 8px rgb(0, 0, 0, 10%);
  transition: 0.3s;
  border-radius: 16px 16px 0 0;
  max-width: 1024px;
  margin: 1rem;
  padding: 1rem;
}
.activity-single-view__orgs {
  display: flex;
  align-items: center;
  margin: 0.5rem 0rem;
}
.activity-single-view__logo {
  margin-right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border: solid 1px rgba(51,51,51,.2);
  border-radius: 50%;
}
.activity-single-view {
  display: flex;
  justify-content: center;
}
.activity-single-view__card-body {
  width: 40vw;
  margin: 1rem;
}
.activity-single-view__card-bk-info {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  color: var(--el-color-info-light-3);
}
.activity-single-view__card-bk-info-wrap {
  display: flex;
  flex-direction: column
}
.activity-single-view__card-org {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.activity-single-view__location-and-date-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  color: var(--el-color-info);
}
.activity-single-view__card-location {
  text-align: left;
}
.activity-single-view__card-event-wrap {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
  color: var(--el-color-info);
}
.activity-single-view__card-status-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  color: var(--el-color-info);
}
.activity-single-view__card-watch {
  display: inline-flex;
  align-items: center;
  margin: 0rem 0.2rem;
}
.activity-single-view__card-join {
  display: inline-flex;
  align-items: center;
  margin: 0rem 0.2rem;
}

.activity-single-view__title {
  font-size: 2rem;
  font-weight: Bold;
  line-height: 1.5;
  text-align: left;
  color: var(--el-text-color-primary);
}
.activity-single-view__time {
  font-size: 12px;
  color: #999;
}
.activity-single-view__bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.activity-single-view__button {
  padding: 0;
  min-height: auto;
}
.activity-single-view__card-image {
  height: 15vw;
  width: 100%;
  display: block;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
.activity-single-view__card-line {
  border-top: 0.5px solid var(--el-color-info-light-7);
}
.activity-single-view__card-icon {
  padding: 0rem 0.1rem;
}
</style>