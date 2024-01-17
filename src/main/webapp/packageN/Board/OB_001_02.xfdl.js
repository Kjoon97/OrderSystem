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
            this.set_titletext("주문수정팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01_02_02_00","18","11","100","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주문 상태");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","35","46","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주문 상품");
            obj.set_textAlign("center");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_itemNm","148","49","143","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Combo("cbo_ordStat","148","18","142","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            var cbo_ordStat_innerdataset = new nexacro.NormalDataset("cbo_ordStat_innerdataset", obj);
            cbo_ordStat_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">주문대기</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">주문접수</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">주문취소</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">설치완료</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">설치취소</Col></Row></Rows>");
            obj.set_innerdataset(cbo_ordStat_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_exit","171","85","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_chgOrd","35","84","114","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주문 수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,140,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OB_001_02.xfdl", function() {

        this.OB_001_01_onload = function(obj,e)
        {
        	alert("onload 함수 실행");
        };

        this.btn_chgOrd_onclick = function(obj,e)
        {
        	alert("주문 수정 실행");
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
            this.sta01_02_02_00.addEventHandler("onclick",this.sta01_02_onclick,this);
            this.sta01_01.addEventHandler("onclick",this.sta01_01_onclick,this);
            this.btn_exit.addEventHandler("onclick",this.btn_exit_onclick,this);
            this.btn_chgOrd.addEventHandler("onclick",this.btn_chgOrd_onclick,this);
        };
        this.loadIncludeScript("OB_001_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
