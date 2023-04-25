import {Button, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {MyJob} from "@/src/components/units/auth/Auth.types";



export default function MyJobSelect(props: MyJob) {
	
	return(
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					직군을 선택해 주세요
				</MenuButton>
				<MenuList>
					<MenuItem onClick={() => props.setMyJob('IT')}>IT</MenuItem>
					<MenuItem onClick={() => props.setMyJob('마케팅/광고')}>마케팅/광고</MenuItem>
					<MenuItem onClick={() => props.setMyJob('디자인')}>디자인</MenuItem>
					<MenuItem onClick={() => props.setMyJob('미디어/엔터테인먼트')}>미디어/엔터테인먼트</MenuItem>
					<MenuItem onClick={() => props.setMyJob('교육')}>교육</MenuItem>
					<MenuItem onClick={() => props.setMyJob('기타')}>기타</MenuItem>
				</MenuList>
			</Menu>
			{props.myJob &&
				<Text>선택직군은 {'<'}{props.myJob}{'>'} 입니다.</Text>
			}
		</>
	)
	
}