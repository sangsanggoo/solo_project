package solo_project.Service;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import solo_project.Dto.ReqDto.SignupReqDto;
import solo_project.Entity.User;
import solo_project.Repository.LoginRepository;

@Service
@RequiredArgsConstructor
public class LoginService {
	private final LoginRepository loginRepository;
	public void signup(SignupReqDto signupReqDto) {
		User user = signupReqDto.toEntity();
		loginRepository.signup(user);
	}
	
}
