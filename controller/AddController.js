window.AddController = function($scope , $http , $location){
    $scope.title = "Thêm bài viết";
    
    $scope.addPost = function(){
        let linkApi = "http://localhost:3000/post";
        
        let check = true;

        $scope.kiemTra = {
            tieu_de: false,
            noi_dung: false,
            tac_gia: false,
            the_loai: false,
            ngay_dang: false
        }

        if (!$scope.post || !$scope.post.tieu_de) {
            check = false;
            $scope.kiemTra.tieu_de = true;
        }

        if (!$scope.post || !$scope.post.noi_dung) {
            check = false;
            $scope.kiemTra.noi_dung = true;
        }

        if (!$scope.post || !$scope.post.tac_gia) {
            check = false;
            $scope.kiemTra.tac_gia = true;
        }

        if (!$scope.post || !$scope.post.the_loai) {
            check = false;
            $scope.kiemTra.the_loai = true;
        }

        if (!$scope.post || !$scope.post.ngay_dang) {
            check = false;
            $scope.kiemTra.ngay_dang = true;
        }

        if (check) {
            let newPost = {
                tieu_de: $scope.post.tieu_de,
                noi_dung: $scope.post.noi_dung,
                tac_gia: $scope.post.tac_gia,
                the_loai: $scope.post.the_loai,
                ngay_dang: $scope.post.ngay_dang
            }

            $http.post(
                linkApi,
                newPost
            ).then(function(response){
                if (response.status == 201){
                    alert("Thêm dữ liệu thành công");
                    $location.path('/list-post');
                }
            });
        } else {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
    }
}