<template>
    <form method="post">
    <table>
        <tr>
            <td>제목</td>
            <td><input type="text" name="title"></td>
        </tr>
        <tr>
            <td>회사</td>
            <td><input type="text" name="company"></td>
        </tr>
        <tr>
            <td>회사주소</td>
            <td><input type="text" name="company_url"></td>
        </tr>
        <tr>
            <td>부산</td>
            <td><input type="password" name="location"></td>
        </tr>
        <tr>
            <td>내용</td>
            <td>
                <textarea name="description"></textarea>
            </td>
        </tr>
    </table>
    <input type="submit" value="글쓰기">
    </form>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>