package com.poscoict.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
//api를 호출하는 어플리케이션을 브라우저에 호출-> 렌딩페이지
@Controller("restApiTestController")
public class RestApiTestController {
	
	@RequestMapping("/test/rest")
	public String test() {
		return "rest-test";
	}
}
