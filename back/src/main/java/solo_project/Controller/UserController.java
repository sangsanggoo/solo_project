package solo_project.Controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import solo_project.Service.UserSerivce;

@RestController
@RequiredArgsConstructor
public class UserController {
	private final UserSerivce userSerivce;
	@GetMapping("/test")
	public ResponseEntity<?> test(@RequestParam Map<Object,String > requestmap) {
//		userSerivce.addUser();
		System.out.println(requestmap);
		return null;
	}
}
