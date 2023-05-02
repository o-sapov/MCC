<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:mei="http://www.music-encoding.org/ns/mei"
    xmlns:xd="http://www.oxygenxml.com/ns/doc/xsl" exclude-result-prefixes="xs xd" version="2.0">
    <xd:doc scope="stylesheet">
        <xd:desc>
            <xd:p>
                <xd:b>Created on:</xd:b> May 2, 2018</xd:p>
            <xd:p>
                <xd:b>Author:</xd:b> Oleksii Sapov</xd:p>
            <xd:p/>
        </xd:desc>
    </xd:doc>
    <xsl:param name="voice">1</xsl:param>
    <xsl:variable name="different_notes" select="mei:note[not(@corresp)]"/>
    

	<xsl:template match="mei:meiHead"/>
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="mei:music//mei:staff[@n = '5'] | mei:music//mei:staffDef[@n = '5']">
        <xsl:choose>
            <xsl:when test="$voice = 1"/>
            <xsl:otherwise>
                <xsl:copy>
                    <xsl:apply-templates select="node() | @*"/>
                </xsl:copy>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="mei:music//mei:staff[@n = '4'] | mei:music//mei:staffDef[@n = '4']">
        <xsl:choose>
            <xsl:when test="$voice = 2"/>
            <xsl:otherwise>
                <xsl:copy>
                    <xsl:apply-templates select="node() | @*"/>
                </xsl:copy>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
  


    <xsl:template
        match="mei:music//mei:staff[@n = '4']//mei:note[not(@corresp)] | 
        mei:music//mei:staff[@n = '4']//mei:beam[not(mei:note[@corresp])and not(mei:note[@label = 'diff_clef'])]">
        <xsl:choose>
            <xsl:when test="$voice = 3">
                <xsl:variable name="localName" select="local-name()"/>

                <xsl:element xmlns="http://www.music-encoding.org/ns/mei" name="{$localName}">

                    <xsl:if test=".[@staff]">
                        <xsl:attribute name="staff" select="'4'"/>
                    </xsl:if>

                    <xsl:if test=".[@startid]">
                        <xsl:attribute name="startid" select="@startid"/>
                    </xsl:if>

                    <xsl:if test=".[@endid]">
                        <xsl:attribute name="endid" select="@endid"/>
                    </xsl:if>

                    <xsl:if test=".[@curvedir]">
                        <xsl:attribute name="curvedir" select="@curvedir"/>
                    </xsl:if>

                    <xsl:if test=".[@place]">
                        <xsl:attribute name="place" select="@place"/>
                    </xsl:if>

                    <xsl:if test=".[@tstamp]">
                        <xsl:attribute name="tstamp" select="@tstamp"/>
                    </xsl:if>

                    <xsl:if test=".[@tstamp2]">
                        <xsl:attribute name="tstamp2" select="@tstamp2"/>
                    </xsl:if>

                    <xsl:if test=".[@label]">
                        <xsl:attribute name="label" select="@label"/>
                    </xsl:if>

                    <xsl:attribute name="color" select="'#ff9900'"/>

                    <xsl:apply-templates
                        select="@* except (@staff, @startid, @endid, @curvedir, @place, @tstamp, @tstamp2, @label, @color), node()"
                    />
                </xsl:element>
            </xsl:when>
            <xsl:otherwise>
                <xsl:copy>
                    <xsl:apply-templates select="node() | @*"/>
                </xsl:copy>
            </xsl:otherwise>
        </xsl:choose>

    </xsl:template>



    <xsl:template match="node() | @*">
        <xsl:copy>
            <xsl:apply-templates select="node() | @*"/>
        </xsl:copy>
    </xsl:template>


</xsl:stylesheet>
