<script lang="ts" setup>
import { ref } from 'vue'

</script>

<template>
  <section class="card-body">
    <img
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      class="card-image"
    />
    <div style="padding: 0px 14px 14px 14px">
      <div class="card-bk-info">
        <scan class="card-date">2023-02-28</scan>
        <scan class="card-org">
          <span class="material-symbols-outlined card-icon">
          groups
          </span>
          <scan>清華綠點點</scan>
        </scan>
      </div>
      <div class="card-title"> 2023 第一場永續沙龍！生活實驗室計畫說明會！</div>
      <div class="card-location-wrap">
        <span class="material-symbols-outlined">
          location_on
        </span>
        <span class="card-location">教育館 Rm 103</span>
      </div>
      <hr class="card-line"/>
      <div class="card-event-wrap">
        <img src = "/src/assets/SDGs/12.png" alt="Bubble Log" height="48" width="48" />
        <div class="card-status-wrap">
          <span class="card-watch">
            <span class="material-symbols-outlined" style="">
              visibility
            </span>
            <span>110</span>
          </span>
          <span class="card-join">
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
.card-body {
  /* Add shadows to create the "card" effect */
  /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);*/
  box-shadow: 0 2px 8px rgb(0, 0, 0, 10%);
  transition: 0.3s;
  border-radius: 16px 16px 0 0;
  width: 25vw;
  margin: 0 15px 16px 0px;
}
.card-bk-info {
  display: inline-flex;
  font-size: 0.8rem;
  width: 100%;
  color: var(--el-color-info-light-3);

}
.card-date {
  margin-right: auto;
}
.card-org {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.card-location-wrap {
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
  font-size: 0.85rem;
  color: var(--el-color-info);
}
.card-location {
  text-align: left;
}
.card-event-wrap {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  width: 100%;
  color: var(--el-color-info);
}
.card-status-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  color: var(--el-color-info);
}
.card-watch {
  display: inline-flex;
  align-items: center;
  margin: 0rem 0.2rem;
}
.card-join {
  display: inline-flex;
  align-items: center;
  margin: 0rem 0.2rem;
}

.card-title {
  font-size: 1.4rem;
  font-weight: Bold;
  line-height: 1.5;
  text-align: left;
  color: var(--el-text-color-primary);
}
.time {
  font-size: 12px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  padding: 0;
  min-height: auto;
}
.card-image {
  height: 15vw;
  width: 100%;
  display: block;
  border-radius: 16px 16px 0 0;
  object-fit: cover;
  margin-bottom: 0.5rem;
}
/* On mouse-over, add a deeper shadow */
.card-body:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.card-line {
  border-top: 0.5px solid var(--el-color-info-light-7);
}
.card-icon {
  padding: 0rem 0.1rem;
}
</style>
