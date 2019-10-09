import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';

export default class Main extends Component {
  state = {
    users: [],
    newUsername: '',
  };

  handleAddUsername = async () => {
    const { users, newUsername } = this.state;

    const response = await api.get(`/users/${newUsername}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUsername: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { users, newUsername } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add username"
            value={newUsername}
            onChangeText={text => this.setState({ newUsername: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUsername}
          />
          <SubmitButton onPress={this.handleAddUsername}>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>

        <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>See profile</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'GitHub Users',
};
