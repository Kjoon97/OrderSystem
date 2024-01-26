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

            obj = new CheckBox("chk_companyyn","442","17","36","24",null,null,null,null,null,null,this);
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"78\"/><Column size=\"68\"/><Column size=\"79\"/><Column size=\"82\"/><Column size=\"102\"/><Column size=\"158\"/><Column size=\"90\"/><Column size=\"85\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"주문번호\"/><Cell col=\"1\" text=\"주문상태\"/><Cell col=\"2\" text=\"고객번호\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객구분\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상품명\"/><Cell col=\"8\" text=\"주문일시\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
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
        	alert("주문리스트 조회");

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
            this.chk_companyyn.addEventHandler("onchanged",this.chk_companyyn_onchanged,this);
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
