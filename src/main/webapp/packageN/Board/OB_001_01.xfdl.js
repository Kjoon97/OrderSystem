(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OB_001_01");
            this.set_titletext("주문등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01_02","18","24","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_custNm","159","33","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_00","-2","88","159","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생년월일/사업자번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_birBizNo","159","92","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_01","18","58","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","159","63","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02","15","115","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_addr","159","122","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_02_02_00","17","144","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("고객 구분");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","34","179","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","158","182","143","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_itemNm_innerdataset = new nexacro.NormalDataset("cbo_itemNm_innerdataset", obj);
            cbo_itemNm_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">주문대기</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">주문접수</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">주문취소</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">설치완료</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">설치취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_itemNm_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_custGb","159","150","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_custGb_innerdataset = new nexacro.NormalDataset("cbo_custGb_innerdataset", obj);
            cbo_custGb_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">주문대기</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">주문접수</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">주문취소</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">설치완료</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">설치취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_custGb_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","166","225","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_regOrd","30","225","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주문 등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_01.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	alert("onload 이벤트 실행");
        	//주문 등록을 위한 주문 상태, 주문상품 콤보박스 초기화
        };

        this.btn_regOrd_onclick = function(obj,e)
        {
        	alert("주문 등록 버튼 실행");
        };

        this.btn_exit_onclick = function(obj,e)
        {
        	alert("닫기 실행");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OB_001_01_onload,this);
            this.sta01_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_01.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_02.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_02_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.cbo_custGb.addEventHandler("onitemchanged",this.cbo_custGb_onitemchanged,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_regOrd.addEventHandler("onclick",this.btn_regOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
