window.EditController = function($scope , $http , $location , $routeParams){
    $scope.title = "Sửa bài viết";

    let linkApi = "http://localhost:3000/post";  

    let postID = $routeParams.id;

    $http.get(
        `${linkApi}/${postID}`
    ).then(function(response){
        if(response.status == 200){
            $scope.post = {
                id: response.data.id,
                tieu_de: response.data.tieu_de,
                noi_dung: response.data.noi_dung,
                tac_gia: response.data.tac_gia,
                the_loai: response.data.the_loai,
                ngay_dang: new Date(response.data.ngay_dang)
            }
        }
    });

    $scope.editPost = function(){
        
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

            $http.put(
                `${linkApi}/${postID}`,
                newPost
            ).then(function(response){
                if (response.status == 200){
                    alert("Chỉnh sửa dữ liệu thành công");
                    $location.path('/list-post');
                }
            });
        } else {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
    }
}