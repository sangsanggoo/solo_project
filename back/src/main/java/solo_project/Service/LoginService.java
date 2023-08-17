package solo_project.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import solo_project.Dto.ReqDto.SignupReqDto;
import solo_project.Entity.User;
import solo_project.Repository.LoginRepository;

@Service
@RequiredArgsConstructor
public class LoginService {
	private final LoginRepository loginRepository;
	private final JavaMailSender javaMailSender ;
	public void signup(SignupReqDto signupReqDto) {
		User user = signupReqDto.toEntity();
		loginRepository.signup(user);
	}
	public Map<String, Object> sendCode(SignupReqDto signupReqDto) {
		User user = signupReqDto.toEntity();
		Map<String, Object> responseMap = new HashMap<>();
		if(loginRepository.findByEmail(user) != null) {
			System.out.println("사용중인 이메일입니다.");
			responseMap.put("error","사용중인 이메일입니다.");
			return responseMap;
		} else {
			MimeMessage message = javaMailSender.createMimeMessage();
				MimeMessageHelper helper;
				try {
					helper = new MimeMessageHelper(message, false, "utf-8");
					helper.setSubject("상구네 카페 이메일 인증");
					helper.setFrom("bagume6191@naver.com");
					helper.setTo(user.getEmail());
					String token = UUID.randomUUID().toString().replaceAll("-", "").substring(0, 6);
					message.setText(
							"<div>"
									+ "<h1>비밀번호 찾기</h1>"
									+ "<p>아래의 코드를 웹페이지에서 입력해주세요</p>"
									+ "<h1>" + token +"</h1>"
									+ "</div>", "utf-8", "html");
					javaMailSender.send(message);
//					메일 전송 완료
					
					responseMap.put("code", token);
					return responseMap;

				} catch (MessagingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

		} 
		return responseMap;
		 
	}
	
	
}
