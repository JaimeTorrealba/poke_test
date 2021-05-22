<template>
  <div class="d-flex justify-center align-center flex-column">
      <Title :titleText="titleText" />
      <BodyText :bodyText="bodyText" />
      
  </div>
</template>
<script>
import Title from '@/components/atoms/Title'
import BodyText from '@/components/atoms/bodyText'
export default {
    props:{
        titleText:{
            type:String,
            required:true,
        },
        bodyText:{
            type:String,
            required:true,
        }
    },
    components:{
        Title,
        BodyText,
    }
};
</script>
<style lang="scss" scoped></style>