import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Yen extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Yen({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 4L12 12M18 4L12 12M12 12V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 16H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}