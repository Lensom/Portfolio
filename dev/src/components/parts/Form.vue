<template>
  <form class="form">
    <div class="field name-box">
        <input class="form__input" type="text" id="name" placeholder="Who Are You?"/>
        <label for="name">Name</label>
    </div>

    <div class="field email-box">
        <input class="form__input" type="text" id="email" placeholder="Your email"/>
        <label for="email">Email</label>
    </div>

    <div class="field msg-box">
        <textarea class="form__textarea" id="msg" rows="4" placeholder="Your message goes here..."/></textarea>
        <label for="msg">Msg</label>
    </div>

    <input class="button btn--submit" type="submit" value="Send" />
  </form>
</template>

<script>
export default {

}
</script>  
