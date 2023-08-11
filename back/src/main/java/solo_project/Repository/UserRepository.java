package solo_project.Repository;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	public void addUser();
}
