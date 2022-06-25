import { View, Text, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      
      <Image
        style={{ height: 300,}}
        source={{
          uri: "https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/151697206_733889480656784_8076122449299495101_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NPRIvdFhAiUAX-Mkrn0&tn=2E6CmETA3lTLyyz1&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT_9WFxDHsC6i0enVy25tF_P3W_NDUzzp-FuuzArg_EWVA&oe=62DD6A51",
        }}
      />
      <Text style={{ backgroundColor: "black",color:"white", flex: 1, alignItems:'center',justifyContent:'center',alignContent:'center' }}>This is Home screen and MinhNhat photo</Text>
    </View>
  );
};

export default Home;
