package solo_project.Dto.ReqDto;

import lombok.Data;
import solo_project.Entity.User;

@Data
public class SignupReqDto {
	private String email;
	private String password;
	private String name;
	public User toEntity() {
		return User.builder().name(name)
//							.password(new BCryptPasswordEncoder().encode(password))
							.password(password)
							.email(email)
							.build();
	}
}
