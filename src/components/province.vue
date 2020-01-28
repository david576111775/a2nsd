<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="省份" required>
        <el-select v-model="form.province" style="width: 300px">
          <el-option label="山东省" value="山东省"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="概括">
        <el-input type="textarea" v-model="form.gk" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="确诊数据">
        <el-input v-model="form.confirmdata" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="疑似数据">
        <el-input v-model="form.suspecteddata" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="死亡数据">
        <el-input v-model="form.deathdata" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="确诊概括">
        <el-input type="textarea" v-model="form.confirmgk" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="疑似概括">
        <el-input type="textarea" v-model="form.suspectedgk" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="死亡概括">
        <el-input type="textarea" v-model="form.deathgk" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker v-model="form.date" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" style="width: 300px"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="width: 300px">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          province: '',
          gk:'',
          confirmdata:'',
          suspecteddata:'',
          deathdata:'',
          confirmgk:'',
          suspectedgk:'',
          deathgk:'',
          date:'',
        }
      }
    },
    methods: {
      onSubmit() {
        var params = {
          city:this.form.province,
          content:this.form.gk,
          qz:this.form.confirmdata,
          ys:this.form.suspecteddata,
          sw:this.form.deathdata,
          qzdesc:this.form.confirmgk,
          ysdesc:this.form.suspectedgk,
          swdesc:this.form.deathgk,
          dt:this.form.date,
        }
        this.$api.user.addCurrentState(params)
            .then(res => {
              console.log(res)
              if(res.result=="0000"){
                this.$message({
                  message: '添加成功！',
                  type: 'success'
                });
              }else{
                this.$message.error('添加失败请重试！');
              }
            })
      }
    }
  }
</script>

<style>

</style>
