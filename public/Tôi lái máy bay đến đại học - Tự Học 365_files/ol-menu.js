jQuery( function( $ ) {
    
    $( document ).ready(function() {
    	$( '.register>a' ).on( 'click', function() {
    		var $signupModal = $('#signupModal');
            if($signupModal.length > 0){
                $signupModal.modal('show');
            
		return false;
		}

    	});

	$( '.login-register-show' ).on( 'click', function() {
            var $signupModal = $('#signupModal');
            if($signupModal.length > 0){
                $signupModal.modal('show');
                $('#loginModal').modal('hide');
            
		return false;
		}
        });

    	// validate form
        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var check = false;
                return this.optional(element) || regexp.test(value);
            },
            "Please check your input."
        );

        jQuery.validator.addMethod("email", function(value, element){
            var $reg = /^[a-zA-Z0-9][a-zA-Z0-9\._]{2,62}[a-zA-Z0-9]@[a-z0-9\-]{3,}(\.[a-z]{2,20}){0,1}(\.[a-z]{2,4}){1,2}$/;
            return this.optional(element) || $reg.test(value);
        }, "Địa chỉ email không hợp lệ");

	jQuery.validator.addMethod("birth", function(value, element){
            var $reg = /\b(19|[2-9][0-9])\d{2}\b/;

            return this.optional(element) || $reg.test(value);
        }, "Năm sinh không hợp lệ.");

        jQuery.validator.addMethod("phone", function(value, element){
            var $reg1 = /^0[2-8]\d{8}$/,
                $reg2 = /^09\d{8}$/,
                $reg3 = /^0[2-8]\d{8}$/;
            return this.optional(element) || $reg1.test(value) || $reg2.test(value) || $reg3.test(value);
        }, "Số điện thoại không hợp lệ.");

    	$("#signupforms").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 4,
                    maxlength: 100,
                    regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]([-']?[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]+)*( [a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]([-']?[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]+)*)+$/
                },
                birth:{
                    required: true,
                    birth: true,
                },
                emailtxt: {
                    required: true,
                    email: true,
                    remote: {
                        url: ol_menu_params.ajax_url,
                        type: 'POST',
                        cache: false,
                        dataType: 'JSON',
                        data: {
                            action: 'online_check_email_register'
                        }
                    }
                },
                phonetxt:{
                    required: true,
                    phone: true,
                },
                passwordtxt: {
                    required: true,
                    minlength: 8,
                    maxlength: 100,
                    regex : /.{8,100}$/
                },
                repaswordtxt: {
                    equalTo: "#passwordtxt"
                }
            },
            messages: {
                name: {
                    required: "Họ và tên không được để trống.",
                    minlength: "Họ và tên phải có ít nhất 4 kí tự.",
                    maxlength: "Họ và tên không vượt quá 100 kí tự.",
                    regex: "Họ và tên chỉ bao gồm chữ (viết hoa, viết thường) và có ít nhất hai từ tách biệt."
                },
	birth:{
                    required: "Năm sinh không được để trống.",
                    phone: "Định dạng năm sinh không hợp lệ."
                },
                emailtxt: {
                    required: "Email không được để trống.",
                    email: "Định dạng email không hợp lệ."
                },
                phonetxt:{
                    required: "Số điện thoại không được để trống.",
                    phone: "Định dạng số điện thoại không hợp lệ."
                },
                passwordtxt: {
                    required: "Mật khẩu không được để trống.",
                    minlength: "Mật khẩu phải có ít nhất 8 kí tự.",
                    maxlength: "Mật khẩu không vượt quá 100 kí tự.",
                    regex : "Mật khẩu có độ dài từ 8 ký tự trở lên. Mật khẩu nên bao gồm cả chữ (viết hoa, viết thường), số và các ký tự đặc biệt như *, &, @..."
                },
                repaswordtxt: {
                    equalTo: "Xác nhận mật khẩu không khớp. Vui lòng nhập lại."
                }
            },
            submitHandler: function(form) {
                var thisForm = $(form);
                if(thisForm.valid()) {
                	$('.register-btn').val('Loading...');

                    $.ajax({
                        url: ol_menu_params.ajax_url,
                        method: "POST",
                        data: {
                            action: 'online_action_register',
                            nonce: ol_menu_params.account_nonce,
                            name : $("#name").val(),
                            birth : $("#birth").val(),
                            password : $("#passwordtxt").val(),
                            email : $("#emailtxt").val(),
                            phone : $("#phonetxt").val(),
                            rqr_redirect : $("#rqr_redirect").val(),
	            			redirect_reg: $('#redirect_reg').val()
                        },
                        dataType: "JSON",
                        success: function(response) {
                        	console.log(response);
                            if(response.success) {
                                window.location.href = response.data;
                            } else {                            
                                thisForm.find('.alertMsg').html('<div class="alert alert-danger">' + response.data + '</div>');
                            }

                        	$('.register-btn').val('Đăng ký');
                        }
                    });
                }
            }
        });

    });
} ); 