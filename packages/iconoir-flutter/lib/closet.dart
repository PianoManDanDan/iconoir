import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Closet extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Closet({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14L8 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 14L15 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2H20.4C20.7314 2 21 2.26863 21 2.6V21.4C21 21.7314 20.7314 22 20.4 22H12M12 2H3.6C3.26863 2 3 2.26863 3 2.6V21.4C3 21.7314 3.26863 22 3.6 22H12M12 2V22" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
