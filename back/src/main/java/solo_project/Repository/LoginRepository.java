package solo_project.Repository;

import org.apache.ibatis.annotations.Mapper;

import solo_project.Entity.User;
@Mapper
public interface LoginRepository {
	public int signup(User user);
	public User findByEmail(User user);
}
