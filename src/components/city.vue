<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="城市名称">
        <el-select v-model="form.region" placeholder="请选择城市代码">
          <el-option label="济南" value="济南"></el-option>
          <el-option label="青岛" value="青岛"></el-option>
          <el-option label="淄博" value="淄博"></el-option>
          <el-option label="枣庄" value="枣庄"></el-option>
          <el-option label="东营" value="东营"></el-option>
          <el-option label="烟台" value="烟台"></el-option>
          <el-option label="潍坊" value="潍坊"></el-option>
          <el-option label="济宁" value="济宁"></el-option>
          <el-option label="泰安" value="泰安"></el-option>
          <el-option label="威海" value="威海"></el-option>
          <el-option label="日照" value="日照"></el-option>
          <el-option label="莱芜" value="莱芜"></el-option>
          <el-option label="临沂" value="临沂"></el-option>
          <el-option label="德州" value="德州"></el-option>
          <el-option label="聊城" value="聊城"></el-option>
          <el-option label="滨州" value="滨州"></el-option>
          <el-option label="菏泽" value="菏泽"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间">
        <el-col :span="12">
          <el-date-picker
            type="date"
            value-format="yyyyMMdd"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%;"
          ></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="数量信息">
        <el-col :span="8">
          <el-form-item label="确诊数量">
            <el-input v-model="form.confirmednum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="疑似数量">
            <el-input v-model="form.suspectednum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="死亡数量">
            <el-input v-model="form.deathnum"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="城市概况">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
        <el-button type="primary" @click="onUpdate">修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        form: {
          region: "",
          date1: "",
          desc: "",
          confirmednum: "",
          suspectednum: "",
          deathnum: ""
        },
        citydata: {
          city: "",
          citycode: "",
          qz: "",
          ys: "",
          sw: "",
          dt: "",
          desc: ""
        },
        map: {
          济南: "3701",
          青岛: "3702",
          淄博: "3703",
          枣庄: "3704",
          东营: "3705",
          烟台: "3706",
          潍坊: "3707",
          济宁: "3708",
          泰安: "3709",
          威海: "3710",
          日照: "3711",
          莱芜: "3712",
          临沂: "3713",
          德州: "3714",
          聊城: "3715",
          滨州: "3716",
          菏泽: "3717"
        }
      };
    },
    methods: {
      onUpdate() {
        console.log("submit!");
        this.citydata.city = this.form.region;
        this.citydata.citycode = this.map[this.form.region];
        this.citydata.qz = this.form.confirmednum;
        this.citydata.ys = this.form.suspectednum;
        this.citydata.sw = this.form.deathnum;
        this.citydata.desc = this.form.desc;
        this.citydata.dt = this.form.date1;
        this.upinfo();
        console.log(this.citydata)
        console.log(this.form);
      },
      onSubmit() {
        console.log("submit!");
        this.citydata.city = this.form.region;
        this.citydata.citycode = this.map[this.form.region];
        // this.citydata.citycode = this.form.region;
        this.citydata.qz = this.form.confirmednum;
        this.citydata.ys = this.form.suspectednum;
        this.citydata.sw = this.form.deathnum;
        this.citydata.desc = this.form.desc;
        this.citydata.dt = this.form.date1;
        this.postinfo();
        console.log(this.citydata);
      },
      getinfo() {
        axios({
          method: "get",
          url: "/test"
        })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
      },
      postinfo() {
        //方法2
        axios
            .post("http://120.27.114.183:10010/city/addCitydata", null, {
              params: this.citydata
            })
            .then(response => {
              this.$message("上传成功!");
              console.log(response.data);
            })
            .catch(error => {
              this.$message("上传失败!");
              console.log(error);
            });
      },
      upinfo() {
        //方法2
        axios
            .post("http://120.27.114.183:10010/city/updateByCity", null, {
              params: this.citydata
            })
            .then(response => {
              this.$message("更新成功!");
              console.log(response.data);
            })
            .catch(error => {
              this.$message("更新失败!");
              console.log(error);
            });
      }
    }
  };
</script>
