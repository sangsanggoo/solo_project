package solo_project.Service;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import solo_project.Entity.User;
import solo_project.Repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserSerivce {
	private final UserRepository userRepository;
	public void addUser(User user) {
		userRepository.addUser(user);
		return;
	}
}
