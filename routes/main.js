const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

//////////////////////////////////////////////////
// GET

//메인페이지
router.get("/", controller.main);

//마이페이지
router.get("/mypage", controller.mypage);

// 회원가입
router.get("/signup", controller.signup);

// 로그인
// router.get("/login_test", controller.login_test);

// 로그인 모달
router.get("/login_modal", controller.login_modal);

//프로젝트 목록페이지
router.get("/project-list", controller.projectlist);

//리코프런 목록페이지
router.get("/recoplearn-list", controller.recoplearnlist);

//프로젝트업로드 페이지
router.get("/project", controller.project);

// 상세페이지
router.get("/detailPage", controller.detailPage);
//////////////////////////////////////////////////
// POST

//프로젝트 목록 페이지 데이터 가져오기
router.post("/project-list", controller.projectlist_post);

//리코프런 목록 페이지 데이터 가져오기
router.post("/recoplearn-list", controller.recoplearnlist_post);

// 로그인 마이페이지

module.exports = router;
