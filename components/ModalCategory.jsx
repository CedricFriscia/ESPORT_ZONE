// CustomModal.js
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import CustomBadgeCategory from "../components/CustomBadgeCategory";
import { getAllCategories } from "../lib/useApi";

const ModalCategory = ({
  visible,
  onClose,
  handleLogoutModalVisible,
  logoutModalVisible,
}) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllCategories();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <FlatList
        data={categories}
        className="bg-white w-[85%] h-[40%] mx-auto"
        renderItem={({ item: category }) => (
          // <CustomBadgeCategory name={category.name} icon={category.icon} />
          <Text>test</Text>
        )}
        keyExtractor={(category) => category.id.toString()}
      />
    </Modal>
  );
};

export default ModalCategory;
