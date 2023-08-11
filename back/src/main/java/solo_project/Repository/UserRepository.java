package solo_project.Repository;

import org.apache.ibatis.annotations.Mapper;

import solo_project.Entity.User;
@Mapper
public interface UserRepository {
	public int addUser(User user);
}
