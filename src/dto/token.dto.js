export default class UserDTO {
  static getUserTokenFrom = (user) => {
    const { first_name, last_name, role, avatar, email } = user;
    return {
      full_name: first_name + (last_name ? ` ${last_name}` : ``),
      role,
      avatar,
      email,
    };
  };
}
