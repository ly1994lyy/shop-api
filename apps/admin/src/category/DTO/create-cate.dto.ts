import { IsNotEmpty, Matches, MaxLength } from 'class-validator';

export class CreateCateDto {
  @IsNotEmpty({ message: '分类名称不能为空' })
  @MaxLength(10, { message: '分类长度不能超过10' })
  @Matches(/^[0-9a-zA-Z\u4e00-\u9fa5]+$/, {
    message: '只能输入汉字、数字和字母',
  })
  cateName: string;
}
