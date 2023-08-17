package solo_project.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import solo_project.Dto.ReqDto.SignupReqDto;
import solo_project.Service.LoginService;

@RequiredArgsConstructor
@RestController
public class LoginController {
	private final LoginService loginService;
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody SignupReqDto signupReqDto) {
		loginService.signup(signupReqDto);
		return null;
	}
	@PostMapping("/sendcode")
	public ResponseEntity<?> sendCode(@RequestBody SignupReqDto signupReqDto) {
//		System.out.println(signupReqDto);
		System.out.println(loginService.sendCode(signupReqDto));
		return ResponseEntity.ok().body(loginService.sendCode(signupReqDto));
	}
}
