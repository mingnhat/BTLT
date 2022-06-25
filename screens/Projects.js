import { React, useRef, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Entypo } from "@expo/vector-icons";

import { UiHeaderButton, Board } from "../components";

export default function Projects(props) {
  const [projectName, setProjectName] = useState("Add Money");
  const [selectedBoard, setSelectedBoard] = useState([true, false, false]);

  const scrollRef = useRef();
  const boardWidth = 300;

  return (
    <SafeAreaView
      style={{ backgroundColor: "#000", flex: 1, alignItems: "center" }}
    >
      {/* item 1 */}
      <View
        style={{
          flexDirection: "row",
          height: 45,
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity>
        
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
            marginHorizontal: 40,
          }}
        >
          <Text style={{ color: "violet", fontSize: 20 }}>{projectName}</Text>
          
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => alert("bam cd ;a")}>
          
        </TouchableOpacity>
      </View>
      {/* item2 */}
      
      {/* item3 */}
      <View style={{ backgroundColor: "violet", height: 1, opacity: 0.36 }} />
      {/* item4 */}

      <ScrollView
        style={{ maxHeight: 500 }}
        ref={scrollRef}
        horizontal
        
      >
        <Board projectName={projectName} />
        <Board projectName={projectName} />
        <Board projectName={projectName} />
        <Board projectName={projectName} />
        <Board projectName={projectName} />
      </ScrollView>

    
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {selectedBoard.map((board, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              backgroundColor: board ? "#fff" : "#fff5",
              borderRadius: 70,
              alignSelf: "center",
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    
      <View
        style={{
          backgroundColor: "violet",
          opacity: 0.18,
          height: 1,
          marginVertical: 10,
        }}
      />
    </SafeAreaView>
  );
}
