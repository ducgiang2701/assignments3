import React, {useState} from 'react';
import {
  Image,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SearchWrapper, IconWrapper} from './styled';

const Search = props => {
  const {open, value, items, setOpen, setValue, setItems} = props;
  return (
    <SearchWrapper>
      <IconWrapper>
        <Image
          style={styles.icon}
          source={{uri: 'https://cdn-icons-png.flaticon.com/128/54/54481.png'}}
        />
      </IconWrapper>
      <View style={{flex: 1}}>
        <TextInput
          value={props.text}
          onChangeText={props.searchFilterFunction}
          placeholder="Search..."
        />
      </View>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <IconWrapper>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/7094/7094575.png',
            }}
          />
        </IconWrapper>
      </TouchableOpacity>
      {open && (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Filter by property"
          showArrowIcon={false}
          theme="DARK"
          multiple={true}
          containerStyle={styles.dropdownStyles}
          dropDownDirection="DEFAULT"
        />
      )}
    </SearchWrapper>
  );
};

const styles = StyleSheet.create({
  icon: {width: 18, height: 18},
  dropdownStyles: {
    width: 200,
    position: 'absolute',
    zIndex: 100,
    right: 0,
    top: '100%',
  },
});

export default Search;
