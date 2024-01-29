(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001");
            this.set_titletext("주문 게시판");
            this.set_background("white");
            this.set_font("bold 12px/normal \"Gulim\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,726);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordStatCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_STAT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_GBCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","104","1","841","85",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid black");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","1","1","103","85",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px solid");
            obj.set_background("ivory");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","16","94","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문 등록");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ordNo","200","20","110","18",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","120","14","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주문 번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_cmpYn","442","17","36","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","325","18","107","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인 고객여부");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_ordStat","420","50","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CD_VAL1");
            obj.set_datacolumn("CD_NM1");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("ds_ordStatCombo");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","343","49","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_custGb","645","21","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdo_custGb_innerdataset = new nexacro.NormalDataset("rdo_custGb_innerdataset", obj);
            rdo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">P</Col><Col id=\"datacolumn\">개인</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">법인</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">임직원</Col></Row></Rows>");
            obj.set_innerdataset(rdo_custGb_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","555","17","95","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ordList","5","126","826","282",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"66\"/><Column size=\"65\"/><Column size=\"68\"/><Column size=\"62\"/><Column size=\"87\"/><Column size=\"97\"/><Column size=\"109\"/><Column size=\"177\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD_NO\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ORD_STAT_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_NO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CUST_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CUST_GBCD_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PHONE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ADDR\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:ITEM_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REG_DT\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02","120","49","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","199","53","111","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_updOrd","94","93","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문 수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delOrd","174","93","64","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주문 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_selectOrd","841","3","99","78",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조 회");
            obj.set_background("#2923cb");
            obj.set_color("aliceblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,726,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001.xfdl", function() {
        this.OB_001_onload = function(obj,e)
        {
        //this는 화면 전체를 의미한다.
        	//alert("onload 함수 실행");

        	//OB_001.xfml이 화면이 로드될 때 검색 조건의 주문 상태 콤보박스를 초기화 시켜주기 위해.
        	//서버에 요청을 하기 전에 서버로 전달해줘야할 인자값은 뭐가 있을지 생각을 해봐야함.
        	//주문 상태값만을 불러오기 위해서는 TB_CD_MST 테이블 WEHRE절에 CD_VAL = '001'이라는 조건을 걸어줘야한다.
        	//따라서 DATASET에는 001이라는 값을 넣어 서버로 전달.

        	//ds_searchcombo 데이터셋을 생성하고 서버로 전달할 인자값을 추가해보자.
        	this.ds_searchCombo.clearData();   //데이터 셋을 초기화
        	this.ds_searchCombo.addRow();      //데이터 셋 값을 세팅하기 위해 1줄의 row를 추가함.
        	this.ds_searchCombo.setColumn(0, "CD_VAL", "001");   // 추가된 0번째 "CD_VAL"컬럼에 "001"을 넣자.

        	//서버로 데이터를 전송한다. 그 전에 필요한 값들을 세팅한다.
        	var strSvcId = "selectCommonCode";      //넥사크로에서 트랜잭션을 구분하기 위한 id 값. 이 id 값을 차후 fncallback(후처리) 함수에서 쓰인다.
            var strSvcUrl = "selectCommonCode.do";  //java controller에서 이 주소를 식별하여 요청을 처리한다.
        	var inData = "ds_search=ds_searchCombo";  // ds_searchCombo(위에서 만든 데이터셋- 프론트엔드)을 ds_search(서버의 맵 객체)에 넣는다.
        	                                         // 서버측(.java)에도 ds_search 데이터 셋명과 반드시 동일하게 명명해야함.
        	var outData = "ds_ordStatCombo=ds_commonCode";  //서버로부터 값을 전달받을 데이터 셋을 세팅하는 것. 서버 데이터셋(dsCommonCode)
        	var strAvg = "";                          //데이터셋이 아닌 값을 보낼때 쓰는 필드지만, 데이터 셋을 쓰는 것으로 통일하자.
        	var callBackFnc ="fnCallback";            // 서버로부터 값을 받은 이후 프론트에서 이행할 작업 코드를 fnCallback 함수에서 작성한다.

        	this.gfnTransaction(strSvcId,
        						strSvcUrl,
        						inData,
        						outData,
        						strAvg,
        						callBackFnc);     // 서버로 요청이 감.
        };

        this.btn_selectOrd_onclick = function(obj,e)
        {
        	//alert("주문리스트 조회");
        	//1. 조회 버튼을 클릭했을 때 우리는 db에서 데이터를 조회하여 값을 그리드에 뿌려줘야한다.
        	//그렇다면 프론트에서 우리는 어떤 값들을 만들어서 서버로 보내줘야할까?
        	//바로 검색조건에 있는 값들을 담아서 서버로 보내줘야한다.
        	//이 값들을 주문 리스트 조회 시 where 절에 넣어줘야 알맞은 데이터를 가져올 수 있다.
        	//따라서 검색 조건들을 ds_searchList 라는 데이터 셋을 만들어서 값을 세팅해주는 작업을 해보자.
        	this.ds_searchList.clearData();
        	this.ds_searchList.addRow();
        	this.ds_searchList.setColumn(0, "ORD_NO", this.edt_ordNo.value);
        	this.ds_searchList.setColumn(0, "CUST_NM", this.edt_custNm.value);
        	this.ds_searchList.setColumn(0, "COMP_YN", this.chk_cmpYn.value);
        	this.ds_searchList.setColumn(0, "ORD_STAT_CD", this.cbo_ordStat.value);
        	this.ds_searchList.setColumn(0, "CUST_GBCD", this.rdo_custGb.value);

        	trace("로그 남기기");   //넥사크로에서 로그 남기는 방법.
        	trace("ORD_NO : " + this.ds_searchList.getColumn(0, "ORD_NO"));
        	trace("CUST_NM : "+ this.ds_searchList.getColumn(0, "CUST_NM"));
        	trace("COMP_YN : "+ this.ds_searchList.getColumn(0, "COMP_YN"));
        	trace("ORD_STAT_CD : "+ this.ds_searchList.getColumn(0, "ORD_STAT_CD"));
        	trace("CUST_GBCD : "+ this.ds_searchList.getColumn(0, "CUST_GBCD"));

        	//2.서버에서 가져온 주문 리스트를 그리드에 보여줘야한다,
        	//앞서 그리드에 뼈대만 만들어줬다. ds_list라는 데이터 셋을 만들어 바인딩함으로써
        	//그리드가 서버로부터 가져오는 ds_list값을 유기적으로 보여주도록 만들어줄 것이다.

        	//3. this.gfnTransaction함수를 써서 서버로 데이터를 전송하고 받아보겠다.
        	var strSvcId = "selectOrdList";
            var strSvcUrl = "selectOrdList.do";
        	var inData = "ds_searchList=ds_searchList"; //(서버의)ds_searchList(좌)에 (프론트 데이터셋)ds_searchList(우)을 넣자.
        	var outData = "ds_list=ds_list";            //서버의 ds_list(우)를 프론트데이터셋 ds_list(좌)에 넣기. 서버로부터의 받은 값을 프론트에 넣기.
        	var strAvg = "";
        	var callBackFnc ="fnCallback";

        	this.gfnTransaction(strSvcId,
        						strSvcUrl,
        						inData,
        						outData,
        						strAvg,
        						callBackFnc);     // 서버로 요청이 감.
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 팝업 오픈");
        };

        this.btn_updOrd_onclick = function(obj,e)
        {
        	alert("주문 수정 팝업 오픈");
        };

        this.btn_delOrd_onclick = function(obj,e)
        {
        	alert("주문 삭제 진행");
        };

        this.grd_ordList_oncelldblclick = function(obj,e)
        {
        	//그리드 더블 클릭시 실행
        };

        this.chk_companyyn_onchanged = function(obj,e)
        {
        	alert("onchanged 함수 실행");
        };

        this.cbo_ordStat_onitemchanged = function(obj,e)
        {

        };

        /**********************************************************************************
        * CallBack Function (서버 수신 후 후처리 영역)
        *************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID)  //svcID: 트랜잭션 아이디.
        	{
        		case "selectCommonCode":
        			this.ds_ordStatCombo.insertRow(0);  //0번째 row에 추가하면 순차적으로 뒤로 밀림.
        			this.ds_ordStatCombo.setColumn(0,"CD_VAL1","");
        			this.ds_ordStatCombo.setColumn(0,"CD_NM1","전체");
        			break;
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_onload,this);
            this.sta02.addEventHandler("onclick",this.sta02_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
            this.chk_cmpYn.addEventHandler("onchanged",this.chk_companyyn_onchanged,this);
            this.sta01_00.addEventHandler("onclick",this.sta01_00_onclick,this);
            this.cbo_ordStat.addEventHandler("onitemchanged",this.cbo_ordStat_onitemchanged,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.rdo_custGb.addEventHandler("onitemchanged",this.rdo_cust_onitemchanged,this);
            this.sta01_00_00.addEventHandler("onclick",this.sta01_00_00_onclick,this);
            this.grd_ordList.addEventHandler("oncelldblclick",this.grd_ordList_oncelldblclick,this);
            this.sta01_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.btn_updOrd.addEventHandler("onclick",this.btn_updOrd_onclick,this);
            this.btn_delOrd.addEventHandler("onclick",this.btn_delOrd_onclick,this);
            this.btn_selectOrd.addEventHandler("onclick",this.btn_selectOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
