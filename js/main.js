// table append 

$(document).ready(function(){
	$(".addCF").click(function(){
		$("#customFields").append('<tr valign="top"><td><input type="text" name="payment_method[]" class="code" id="customFieldName" name="customFieldName[]" value="" placeholder="Method Name" /></td>  &nbsp; <td> <input type="text" class="code" id="customFieldValue" name="methodInfo[]" value="" placeholder="Method Info" /> </td>&nbsp; <td> <a href="javascript:void(0);" class="remCF btn">Remove</a> </td> </tr>');
	});
    $("#customFields").on('click','.remCF',function(){
        $(this).parent().parent().remove();
    });
});
